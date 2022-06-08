import styled from "styled-components";
import { SquareButton } from "../../../components/buttons/squareButton";

export const ListFarmCard = styled.div`
  display: flex;
  margin-inline: auto;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  height: 380px;
  @media (max-width: 1400px) {
    overflow-x: scroll;
    margin-inline: 0px;
  }
`;

const FarmCard = styled.section`
  width: 220px;
  min-width: 220px;
  height: 314px;
  margin-left: 10px;
  margin-bottom: 50px;
  margin-right: 10px;
  border-radius: 32px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.color2};
  box-shadow: 0px 3px 10px 0px #00000063;

  .asset-to-earn {
    margin-left: auto;
    margin-right: auto;
    display: flex;

    justify-content: space-between;

    width: 180px;
    left: 32px;
    top: 97px;

    .text-earn {
      width: 80px;
      left: 0px;
      top: 0px;

      .title {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        height: 10px;
        color: #787ca9;
      }
      .details {
        font-family: "Saira";
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 20px;
        color: ${({ theme }) => theme.palette.contrast};
      }
      .detailsSm {
        font-family: "Saira";
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 20px;
        color: ${({ theme }) => theme.palette.contrast};
      }
    }
    img {
      position: relative;
      margin-top: auto;
      margin-bottom: auto;
      width: 40px;
      height: 40px;
    }
  }

  .button-select  {
    bottom: 0px;
    width: fit-content;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Separator = styled.div`
  width: 196px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  border: 0.5px solid ${({ theme }) => theme.palette.contrast};
  opacity: 0.6;
`;

const Stars = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  text-align: center;
  width: 151px;
  height: 33px;
  position: relative;
  top: -2px;
  border-radius: 0px 0px 8px 8px;
`;

const DisplayStar = (props: any) => {
  return (
    <>
      <img
        style={{ marginTop: "6px", padding: "2px" }}
        alt={"star"}
        src={`svg/star.svg`}
      />
    </>
  );
};

export const CosmicFarmsCard = (props: any) => {
  const stars: JSX.Element[] = [];
  for (let i = 1; i <= props.nbStar; i++) {
    stars.push(<DisplayStar key={i} />);
  }

  function getColor(value: any) {
    if (value === 1) return "#113D02";
    if (value === 2) return "#0E184C";
    if (value === 3) return "#401F92";
    if (value === 4) return "#E47C02";
    if (value === 5) return "#A60A00";
    else return "#abcdef";
  }

  return (
    <>
      <FarmCard style={{ border: "4px solid" + getColor(props.nbStar) }}>
        <Stars style={{ background: getColor(props.nbStar) }}>{stars}</Stars>
        <div style={{ marginBottom: "auto", marginTop: "auto" }}>
          <div className="asset-to-earn">
            <div className="text-earn">
              <p className="title">Earn:</p>
              <p className="details">${props.earn}</p>
            </div>
            <img
              alt={"asset-logo"}
              src={`svg/coins/` + props.earnSvg + `.svg`}
            />
          </div>
          <Separator />
          <div className="asset-to-earn">
            <div className="text-earn">
              <p className="title">Stake:</p>
              <p className="detailsSm">
                {props.stake1 === ""
                  ? `${props.stake2}`
                  : `${props.stake1} - ${props.stake2} LP`}
              </p>
            </div>
            <div style={{ marginBottom: "auto", marginTop: "auto" }}>
              {props.stake1 !== "" && (
                <img
                  alt={"asset-logo"}
                  src={`svg/coins/` + props.stake1Svg + `.svg`}
                />
              )}
              {props.stake2 !== "" && (
                <img
                  alt={"asset-logo"}
                  src={`svg/coins/` + props.stake2Svg + `.svg`}
                />
              )}
            </div>
          </div>
          <Separator />
          <div className="asset-to-earn">
            <div className="text-earn">
              <div
                className="flex"
                style={{ justifyContent: "space-between", width: "176px" }}
              >
                <p className="title">APR:</p>
                <p className="details">{props.apr}%</p>
              </div>
            </div>
          </div>
          <div className="button-select">
            <SquareButton
              onClick={() => {
                props.onClick();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Select
            </SquareButton>
          </div>
        </div>
      </FarmCard>
    </>
  );
};
