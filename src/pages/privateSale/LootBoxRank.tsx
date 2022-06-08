import { useContext, useRef, useState } from "react"
import { useMoralis, useMoralisQuery } from "react-moralis"
import ReactTooltip from "react-tooltip"
import styled from "styled-components"
import { SquareButton } from "../../components/buttons/squareButton"
import { Card } from "../../components/shapes/Card"
import { useDetectMobile } from "../../hooks/useDetectMobile"
import { Context, Lootbox } from "./context"
import ModalConfirm from "./modalsChain/ModalConfirm"

const LootBoxRank = () => {
  const { user } = useMoralis()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0)
  const { state, setState } = useContext(Context)
  const isMobile = useDetectMobile()
  const wrapperRef = useRef<any>()

  const {
    data: [whitelist],
    isFetching,
    fetch,
    error: fetchingError,
  } = useMoralisQuery("Whitelist", (query) =>
    query
      .equalTo("status", "APPROVED")
      .equalTo("user", user ? user.toPointer() : null)
  )
  const amount: number = whitelist?.get("amount") || 0

  const cancelselection = () => {
    setModalIsOpen(false)
    setState({ ...state, selectedLootbox: null, whitelist: null })
  }

  const confirmSelection = () => {
    setModalIsOpen(false)
    fetch()
  }

  const isSelectButtonVisible = (index: number): boolean => {
    const item = state.lootboxItems[index]
    return (
      amount >= (index > 0 ? state.lootboxItems[index - 1].investment : 1) &&
      amount < (index > 2 ? 25001 : item.investment)
    )
  }

  if (fetchingError) console.error("Fetching Error: ", { fetchingError })

  const changeCarouselItem = (index) => {
    const wrapper: HTMLDivElement = wrapperRef.current
    if (!wrapper) return
    setCarouselActiveIndex(index)
    // Scrolling carousel item + margin size multiplied by index
    wrapperRef.current.scrollLeft =
      (wrapper.children[0].clientWidth + 16) * index
  }

  const handleLootbox = (selectedLootbox: Lootbox) => {
    setState({ ...state, selectedLootbox, whitelist })
    setModalIsOpen(true)
  }

  // const items: Item[] =;

  const InfoIcon = (
    <img
      src="svg/info-icon.svg"
      alt="Info"
      className="info-icon"
      style={{ width: "1.5rem" }}
    />
  )

  const mobileDesign = isFetching ? (
    <p>Loading...</p>
  ) : fetchingError ? (
    <p>Fetching Error: {fetchingError}</p>
  ) : (
    <LootBoxRankCarousel>
      <div className="carousel">
        <div className="carousel__wrapper" ref={wrapperRef}>
          {state.lootboxItems.map((item, index) => (
            <Card className="carousel__item" key={"carousel-item-" + index}>
              <div>
                <img src={item.imagePath} alt={item.rank} />
                <h5
                  style={{
                    color: item.color,
                    textShadow: `${item.color} 0 0 25px`,
                  }}
                >
                  {item.rank}
                </h5>
              </div>
              <div>
                <h5>Investment $</h5>
                <b>{"<" + item.investment} $</b>
              </div>
              <div>
                <h5>Token Price $</h5>
                <b>{item.price}</b>
              </div>
              <div>
                <h5>Perks</h5>
                <p>{item.perks}</p>
              </div>
              <div>
                <h5>Details</h5>
                {InfoIcon}
              </div>

              {isSelectButtonVisible(index) ? (
                <SquareButton onClick={() => handleLootbox(item)}>
                  Select
                </SquareButton>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
      <div className="carousel-controller">
        {state.lootboxItems.map((item, index) => (
          <div
            onClick={() => changeCarouselItem(index)}
            key={`carousel-controller-${index}`}
            className={`carousel-controller__item ${
              carouselActiveIndex === index ? "active" : ""
            }`}
          ></div>
        ))}
      </div>
    </LootBoxRankCarousel>
  )
  const desktopDesign = isFetching ? (
    <p>Loading...</p>
  ) : fetchingError ? (
    <p>Fetching Error: {fetchingError}</p>
  ) : (
    <>
      <Card>
        <LootBoxRankGrid>
          <div className="table-header">
            <div></div>
            <h5 className="emphasis">Loot Box Rank</h5>
            <h5>Investment $</h5>
            <h5>Token Price $</h5>
            <h5>Perks</h5>
            <h5>Details</h5>
            <div></div>
          </div>
          {state.lootboxItems.map((item, index) => (
            <div
              className={`table-row ${item.rank}`}
              key={"lootbox-table-row-" + index}
            >
              <div>
                <img src={item.imagePath} alt={item.rank} />
              </div>
              <h5
                style={{
                  color: item.color,
                  textShadow: `${item.color} 0 0 30px`,
                }}
              >
                {item.rank}
              </h5>
              <div>
                <b>{"<" + item.investment} $</b>
              </div>
              <div>
                <b>{item.price}</b>
              </div>
              <div className="perks">{item.perks}</div>
              <div>
                <a href={item.address} target="_blank" rel="noopener noreferrer">
                  <span
                    style={{ cursor: "pointer" }}
                    data-tip={`Address: ${item.address}`}
                  >
                    {InfoIcon}
                  </span>
                </a>
              </div>
              <div>
                {isSelectButtonVisible(index) ? (
                  <SquareButton onClick={() => handleLootbox(item)}>
                    Select
                  </SquareButton>
                ) : null}
              </div>
            </div>
          ))}
        </LootBoxRankGrid>
      </Card>
      <ReactTooltip
        place="top"
        type="dark"
        effect="solid"
        delayHide={250}
        clickable={true}
        getContent={(dataTip) => <div>{dataTip}</div>}
      />

      <ModalConfirm
        modalIsOpen={modalIsOpen}
        onCancel={cancelselection}
        onConfirm={confirmSelection}
      />
    </>
  )

  return isMobile ? mobileDesign : desktopDesign
}

const LootBoxRankCarousel = styled.div`
  h5 {
    color: ${({ theme }) => theme.palette.shy};
    font-size: 1.75rem;
    margin: 0.25rem 0;
  }
  .carousel {
    overflow: hidden;
    &__wrapper {
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
    }
    &__item {
      align-items: center;
      text-align: center;
      width: 90vw;
      border: ${({ theme }) => `1px solid ${theme.palette.color5}`};
      margin: 0.5rem;
      width: 85vw;
      min-width: 85vw;
      justify-content: space-between;
      > div {
        width: 100%;
        margin-bottom: 1rem;
        &:first-child {
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.05);
          border-color: ${({ theme }) => theme.palette.secondary};
        }
      }
      img {
        width: 8rem;
      }
    }
  }

  .carousel-controller {
    /* width: 100; */
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    &__item {
      cursor: pointer;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.5rem;
      border-radius: 100%;
      background: ${({ theme }) => theme.palette.secondary};
      opacity: 0.5;
      &.active {
        box-shadow: ${({ theme }) => `0 4px 30px ${theme.palette.secondary}`};
        opacity: 1;
      }
    }
  }
`

const LootBoxRankGrid = styled.div`
  h5 {
    font-size: 1rem;
  }

  > * {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1.5fr 1fr 1fr;
    grid-gap: 0 0.25rem;
    text-align: center;
    &:not(:last-child) {
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 2px solid rgba(255, 255, 255, 0.05);
    }
  }

  .table-header {
    white-space: nowrap;
    font-weight: bold;
    border-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.shy};
    .emphasis {
      white-space: normal;
      color: ${({ theme }) => theme.palette.secondary};
    }
  }
  .table-header > *,
  .table-row > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .table-row {
    img {
      width: 5rem;
    }
    .perks {
      text-align: left;
    }
  }
`

export default LootBoxRank
