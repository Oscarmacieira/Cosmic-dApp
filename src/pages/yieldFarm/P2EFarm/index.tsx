import SecondPageTitle from "../../../layout/SecondPageTitle";
import {
  SquareButton,
  SquareButtonLg,
  SquareButtonLineAlt,
} from "../../../components/buttons/squareButton";
import { HomeP2E, LootBoxZone } from "./styles";
import { LootBoxes } from "./LootBoxes";
import { chances, days, Lootbox } from "./ObjectP2E";
import { useState } from "react";
import { DropRateModal } from "./DropRateModal";
import { BoxZone } from "../../../components/shapes/BoxZone";
import { Card } from "../../../components/shapes/Card";
import { LinkBtn } from "../../../components/buttons/linkBtn/linkBtn";
import { AssetsIcons } from "../../../components/ui/AssetIcons";
import { VideoFarm } from "../cosmicFarms";
import styled from "styled-components";
import { P2EDetail } from "./P2EDetail";
import { Spacer } from "../../../layout/Spacer";
import { ticker } from "../../../utils/ticker";

export const P2EFarm = () => {
  const [isDropRateList, setIsDropRateList] = useState(false);
  const [isP2Edetail, setIsP2EDetail] = useState(false);
  const [nbDays, setNbDays] = useState();

  const goToDetail = (nbDay) => {
    setIsP2EDetail(!isP2Edetail);
    console.log(nbDay);
    setNbDays(nbDay);
  };
  const toggleDropRateList = () => setIsDropRateList(!isDropRateList);
  return (
    <>
      {!isP2Edetail ? (
        <>
          {" "}
          <SecondPageTitle title={"P2E Farm"}>
            <p>Earn loot boxes to claim ingame assets!</p>
          </SecondPageTitle>
          <Spacer />
          <HomeP2E>
            <br />
            <table>
              <thead>
                <tr>
                  <th>
                    <b className="shy">100$ worth = </b>{" "}
                    <b className="orange">1 LootBox</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>550 000 Units of Total NFT Supply </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <LootBoxZone>
              {Lootbox.map((info) => {
                return (
                  <div className={info.name} key={info.name}>
                    {" "}
                    <LootBoxes
                      key={info.name + "1"}
                      toggleDropRateList={toggleDropRateList}
                      alt={info.name}
                      name={info.name}
                      days07={info.days07}
                      days15={info.days15}
                      days30={info.days30}
                      nbDays={days}
                    />
                  </div>
                );
              })}
            </LootBoxZone>
            <div className="FullListBtn">
              <SquareButtonLineAlt onClick={toggleDropRateList}>
                See Full Drop Rate List
              </SquareButtonLineAlt>
              <p>*Or click on Lootbox!</p>
            </div>
            <Spacer />
            <div className="cardP2E">
              <CardP2E asset1={`${ticker}`} asset2={"avax"} />
              <div id="swapIconDiv">
                {" "}
                <img src="svg/swap.svg" id="swap" alt="or" />
              </div>
              <CardP2E asset1={`${ticker}`} asset2={"usdt"} />
            </div>
            <Spacer />
            <div className="flex-for-desktop">
              <StakeBtnZone
                onBtnClick={(val) => goToDetail(val)}
                nbDays={days[0]}
                chance={chances[0]}
              />
              <StakeBtnZone
                onBtnClick={(val) => goToDetail(val)}
                nbDays={days[1]}
                chance={chances[1]}
              />
              <StakeBtnZone
                onBtnClick={(val) => goToDetail(val)}
                nbDays={days[2]}
                chance={chances[2]}
              />
            </div>
            <hr />
            <Spacer />
            <P2EVideo /> <Spacer />
          </HomeP2E>{" "}
        </>
      ) : (
        <>
          <P2EDetail onBack={goToDetail} nbDays={nbDays} />{" "}
        </>
      )}
      {isDropRateList && (
        <DropRateModal
          toggleDropRateList={toggleDropRateList}
          isDropRateList={isDropRateList}
        />
      )}
    </>
  );
};

const CardP2E = (props: any) => {
  return (
    <>
      <Card>
        <div className="flex" style={{ justifyContent: "center" }}>
          <b className="shy" style={{ marginRight: "30px" }}>
            Stake
          </b>
          <AssetsIcons asset1={props.asset1} asset2={props.asset2} />
        </div>
        <p className="asset-to-stake">
          {props.asset1.toUpperCase()} - {props.asset2.toUpperCase()} LP
        </p>{" "}
        <div
          style={{
            justifyContent: "center",
            position: "relative",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <LinkBtn
            text={
              "Get " +
              props.asset1.toUpperCase() +
              " - " +
              props.asset2.toUpperCase() +
              " LP"
            }
          />
          <LinkBtn text={"View Contract"} />
          <LinkBtn text={"See Pair Info"} />
        </div>
      </Card>
    </>
  );
};

const StakeBtnZone = (props: any) => {
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        width: "100%",
        padding: "10px",
      }}
    >
      <div className="StakeBtnZone">
        <b>{props.nbDays} days</b>
        <div className="flex">
          <span>TimeLock</span>
          <img
            className="lock"
            style={{ width: "20px", height: "20px", marginLeft: "10px" }}
            alt="lock"
            src="svg/blue-lock.svg"
          />
        </div>
      </div>
      <SquareButton
        onClick={() => {
          props.onBtnClick(props.nbDays);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{ width: "100%", marginBottom: "20px" }}
      >
        Stake
      </SquareButton>
      <div className="flex justify-center">
        <b style={{ textAlign: "center" }}>
          <span className="orange center" style={{ fontSize: "16px" }}>
            {props.chance}%
          </span>{" "}
          loot chance{" "}
        </b>
      </div>
    </div>
  );
};

const P2EVideo = styled(VideoFarm)`
  background-image: url("/svg/images/P2EVideo.png");
  background-attachment: local scroll;
  background-position: center top 60px;
`;
