import PageTitle from "../../../layout/PageTitle";
import { TopNav } from "../../../layout/TopNav";
import { Card } from "../../../components/shapes/Card";
import styled from "styled-components";
import { BoxZone } from "../../../components/shapes/BoxZone";
import { SquareButton } from "../../../components/buttons/squareButton";
import { AssetsIcons } from "../../../components/ui/AssetIcons";
import { VideoFarm } from "../cosmicFarms";
import { ticker } from "../../../utils/ticker";

export const P2EDetail = (props: any) => {
  return (
    <>
      <PageTitle>P2E Farm</PageTitle>
      <TopNav onBack={() => props.onBack()} text={"P2E FARMS"} />
      <br />
      <CardP2E asset1={`${ticker}`} asset2={"avax"} nbDays={props.nbDays} />
      <SwapIcon>
        {" "}
        {/* <img src="svg/swap.svg" id="swap" alt="or" /> */}
      </SwapIcon>
      <CardP2E asset1={`${ticker}`} asset2={"usdt"} nbDays={props.nbDays} />
      <hr /> <br /> <br />
      <P2EVideoDetail />
      <br />
    </>
  );
};

const CardP2E = (props: any) => {
  return (
    <>
      {" "}
      <P2ECard>
        <P2EFarmCardContainer>
          <div className="infoP2E">
            <div className="titleinfo">
              <p>
                <span className="shy">Stake</span> {props.asset1.toUpperCase()}-
                {props.asset2.toUpperCase()} LP
              </p>{" "}
              <div style={{ marginTop: "5px" }}>
                <AssetsIcons asset1={props.asset1} asset2={props.asset2} />
              </div>
            </div>
            <p style={{ margin: "5px", marginLeft: "0px" }}>
              <span className="shy">Timelock</span> {props.nbDays} days
              <img
                style={{ marginLeft: "10px", position: "relative", top: "3px" }}
                alt="lock"
                src="svg/blue-lock.svg"
              />
            </p>
            <b>1%</b> <span className="orange">entry fee </span> <b> 1%</b>{" "}
            <span className="orange">withdraw fee</span>
          </div>
          <div className="lootbox-earned">
            <P2EBoxZone>
              {" "}
              <p>
                Lootbox <span>Earned</span>
              </p>
              <div className="nb-button-container">
                {" "}
                <p className="number">0</p>
                <SquareButton>Approve</SquareButton>
              </div>
            </P2EBoxZone>
          </div>
          <div className="start-farming">
            <P2EBoxZone style={{ width: "100%" }}>
              <p>Start Farming</p>
              <div className="nb-button-container">
                {" "}
                <p className="number">&nbsp;</p>
                <SquareButton>Approve</SquareButton>
              </div>
            </P2EBoxZone>
          </div>
        </P2EFarmCardContainer>
      </P2ECard>
    </>
  );
};
const P2ECard = styled(Card)`
  @media (max-width: 992px) {
    padding: 0.7rem;
  }
`;

const P2EVideoDetail = styled(VideoFarm)`
  background-image: url("/svg/images/P2EVideo2.png");
  background-attachment: local scroll;
  background-position: center top 60px;
`;

const SwapIcon = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  transform: rotate(90deg);

  @media (max-width: 992px) {
    margin-bottom: 30px;
  }
`;
const P2EBoxZone = styled(BoxZone)`
  margin-left: 0px !important;
  margin-right: 0px !important;
  height: 120px;
  @media (max-width: 992px) {
    height: 175px;
  }

  .nb-button-container {
    height: 60px;
    @media (max-width: 992px) {
      height: 110px;
    }
  }
`;

const P2EFarmCardContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 992px) {
    display: block;
  }

  p {
    font-weight: 700;
    font-size: 20px;
  }
  .orange {
    color: ${({ theme }) => theme.palette.primary};
  }
  .shy {
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.palette.shy};
    margin-right: 5px;
  }

  .infoP2E {
    padding-right: 15px;
    width: 360px;
    border-right: 1px solid ${({ theme }) => theme.palette.shy};

    @media (max-width: 992px) {
      width: 100%;
      margin-bottom: 10px;
      border-right: none;
    }

    .titleinfo {
      display: flex;
      width: 100%;
      @media (max-width: 992px) {
        justify-content: space-between;
      }

      p {
        margin-right: 10px;
        height: 10px;
        position: relative;
        top: -5px;
      }
    }
  }
  .lootbox-earned {
    width: 40%;
    margin-right: 30px;
    margin-left: 30px;
    @media (max-width: 992px) {
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }

  .start-farming {
    width: 27%;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  #swapIcon {
    width: 100%;
    text-align: center;
    img {
      position: relative;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
