import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import styled from "styled-components";
import { SquareButtonSmLine } from "../../../components/buttons/squareButton";

export const LootBoxes = (props: any) => {
  const [isLootBoxModal, setLootBoxModal] = useState(false);
  const toogleLootModal = () => setLootBoxModal(!isLootBoxModal);
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <img
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onTouchStart={() => setIsHover(true)}
        onTouchEnd={() => setIsHover(false)}
        onClick={() => toogleLootModal()}
        className={"lootbox-" + props.name}
        alt={props.alt}
        src={
          // TBC
          !isHover
            ? "svg/lootboxs/" +
              props.name +
              "/" +
              props.name.toLowerCase() +
              ".png"
            : "svg/lootboxs/" +
              props.name +
              "/" +
              props.name.toLowerCase() +
              "-open.png"
        }
      />

      {isLootBoxModal && (
        <Modal onClose={toogleLootModal} isOpen={isLootBoxModal}>
          <LootBoxModalContainer>
            <div className="close">
              <b onClick={toogleLootModal}>X</b>
            </div>
            <img
              className={"holo-" + props.name}
              alt={"1" + props.alt}
              src={
                "svg/lootboxs/" +
                props.name +
                "/" +
                props.name.toLowerCase() +
                "-holo.svg"
              }
            />
            <h3>{props.name.toUpperCase()}</h3>
            <hr />
            <p className="orange">DROP RATE %</p>
            <div className="droprates-List">
              <DropRates nbDays={props.nbDays[0]} dropRate={props.days07} />
              <DropRates nbDays={props.nbDays[1]} dropRate={props.days15} />
              <DropRates nbDays={props.nbDays[2]} dropRate={props.days30} />
            </div>
            <br />
            <SquareButtonSmLine
              onClick={() => {
                toogleLootModal();
                props.toggleDropRateList();
              }}
            >
              See Full Drop Rate List
            </SquareButtonSmLine>
          </LootBoxModalContainer>
        </Modal>
      )}
    </>
  );
};

export const DropRates = (props: any) => {
  return (
    <>
      {" "}
      <DropRate>
        <div className="days-lock">
          <img
            className="lock"
            style={{ width: "20px", height: "20px" }}
            alt="lock"
            src="svg/blue-lock.svg"
          />
          {props.nbDays} days
        </div>
        <b>{props.dropRate}%</b>
      </DropRate>
    </>
  );
};

const DropRate = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 33%;
  padding: 5px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.palette.shy};
  }

  font-weight: 700;
  .days-lock {
    display: flex;
    justify-content: flex-start;
  }

  b {
    position: relative;
    top: -2px;
    left: 0px;
    font-size: 1.2rem;
  }
  .lock {
    margin-right: 10px;
  }
`;

export const LootBoxModalContainer = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    #14215e 0%,
    rgba(11, 18, 52, 0) 100%
  );
  .close {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-size: 30px;
    b:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
  hr {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #6c77ae 0%,
      rgba(11, 18, 52, 0) 100%
    );
    height: 2px;
    border: none;
  }

  p {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }
  h3 {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    font-weight: 700;
    font-size: 24px;
  }
  img {
    height: 40vh;
    width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  button {
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  .droprates-List {
    width: 100%;
    justify-content: space-between;
    display: flex;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .holo-Normal {
    animation: glow-Normal 1s infinite alternate;
  }
  .holo-Rare {
    animation: glow-Rare 1s infinite alternate;
  }
  .holo-Epic {
    animation: glow-Epic 1s infinite alternate;
  }
  .holo-Legendary {
    animation: glow-Legendary 1s infinite alternate;
  }
  .holo-Cosmic {
    animation: glow-Cosmic 1s infinite alternate;
  }
`;
