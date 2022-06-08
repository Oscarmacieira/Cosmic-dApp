import { LinkBtn } from "../../../components/buttons/linkBtn/linkBtn";
import SecondPageTitle from "../../../layout/SecondPageTitle";
import { yieldObj } from "./FakeYieldList";
import { useState } from "react";
import { TopNav } from "../../../layout/TopNav";
import styled from "styled-components";
import { AprModal } from "./modals/aprModal";
import { TableModal } from "./modals/TableModal";
import { RewardModal } from "./modals/RewardModal";
import { BalanceModal } from "./modals/balanceModal";
import { LiquidityModal } from "./modals/liquidityModal";
import { UpgradeModal } from "./modals/upgradeModal";
import { ListCard } from "../../../components/ui/ListCard";
import { VideoFarm } from "../cosmicFarms";
import { Spacer } from "../../../layout/Spacer";

export const CosmicYield = (props: any) => {
  const [isDetailYield, setIsDetailYield] = useState(false);
  const [detailYield, setDetailYield] = useState({
    earn: "",
    earnSvg: "",
    stake1: "",
    stake1Svg: "",
    stake2: "",
    stake2Svg: "",
    multiplier: "",
    liquidity: "",
    wallet: "",
    balance: "",
  });

  const goToYieldDetail = (
    earn,
    earnSvg,
    stake1,
    stake1Svg,
    stake2,
    stake2Svg,
    multiplier,
    liquidity,
    wallet,
    balance
  ) => {
    setIsDetailYield(true);
    setDetailYield({
      ...detailYield,
      earn: earn,
      earnSvg: earnSvg,
      stake1: stake1,
      stake1Svg: stake1Svg,
      stake2: stake2,
      stake2Svg: stake2Svg,
      multiplier: multiplier,
      liquidity: liquidity,
      wallet: wallet,
      balance: balance,
    });
  };
  return (
    <>
      {!isDetailYield ? (
        <>
          <SecondPageTitle title={"Cosmic Yields"}>
            <p>Autocompound your assets and earn triple rewards!</p>
          </SecondPageTitle>
          <Spacer />

          {yieldObj.map(
            (
              {
                earn,
                earnSvg,
                stake1,
                stake1Svg,
                stake2,
                stake2Svg,
                multiplier,
                liquidity,
                wallet,
                balance,
              },
              key
            ) => (
              <ListCard
                key={key}
                nbStar={multiplier}
                isButton={true}
                stake1Svg={stake1Svg}
                stake2Svg={stake2Svg}
                stake1={stake1}
                stake2={stake2}
                liquidity={liquidity}
                wallet={wallet}
                balance={balance}
                earn={earn}
                isChildren={false}
                onClick={() =>
                  goToYieldDetail(
                    earn,
                    earnSvg,
                    stake1,
                    stake1Svg,
                    stake2,
                    stake2Svg,
                    multiplier,
                    liquidity,
                    wallet,
                    balance
                  )
                }
              ></ListCard>
            )
          )}
          <Spacer />
          <YieldVideo />
          <Spacer />
        </>
      ) : (
        <>
          {" "}
          <SecondPageTitle
            title={detailYield.stake1 + " - " + detailYield.stake2 + " LP"}
          >
            <div className="flex center">
              <LinkBtn text="View Contract" />
              <LinkBtn text="See Pair info" />
            </div>
          </SecondPageTitle>
          <TopNav
            text={"COSMIC YIELDS"}
            onBack={() => setIsDetailYield(false)}
          />
          <Spacer />
          <ListCard
            nbStar={detailYield.multiplier}
            isButton={false}
            stake1Svg={detailYield.stake1Svg}
            stake2Svg={detailYield.stake2Svg}
            stake1={detailYield.stake1}
            stake2={detailYield.stake2}
            liquidity={detailYield.liquidity}
            wallet={detailYield.wallet}
            balance={detailYield.balance}
            earn={detailYield.earn}
            isChildren={true}
          >
            {" "}
            <b>0.5%</b> <span>entry fee | </span> <b>2.5%</b>{" "}
            <span>withdraw fee</span>
          </ListCard>
          <Spacer />
          <Cardzone>
            <div className="one">
              <AprModal />
              <TableModal
                earn={detailYield.earn}
                stake1={detailYield.stake1}
                stake2={detailYield.stake2}
              />
              <RewardModal />
            </div>{" "}
            <div className="two">
              <BalanceModal
                stake1={detailYield.stake1}
                stake2={detailYield.stake2}
                stake1Svg={detailYield.stake1Svg}
                stake2Svg={detailYield.stake2Svg}
              />
              <LiquidityModal
                stake1={detailYield.stake1}
                stake2={detailYield.stake2}
                stake1Svg={detailYield.stake1Svg}
                stake2Svg={detailYield.stake2Svg}
                wallet={detailYield.wallet}
              />
              <UpgradeModal />
            </div>
          </Cardzone>
          <Spacer />
        </>
      )}
    </>
  );
};

export const Cardzone = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    display: block;
  }

  .one {
    grid-column: 1/2;
    grid-row: 1;
  }

  .two {
    grid-column: 2/2;
    grid-row: 1;
  }
`;

const YieldVideo = styled(VideoFarm)`
  background-image: url("/svg/images/yieldImage.png");
  background-attachment: local scroll;
  background-position: center top 60px;

  filter: grayscale(100%) brightness(70%) sepia(60%) hue-rotate(-140deg)
    saturate(500%) contrast(1);
`;
