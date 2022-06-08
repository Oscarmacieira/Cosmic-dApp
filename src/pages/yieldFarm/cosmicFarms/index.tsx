import { useState } from "react";
import styled from "styled-components";
import SecondPageTitle from "../../../layout/SecondPageTitle";
import { Spacer } from "../../../layout/Spacer";
import { farmObj } from "./FakeFarms";
import { CosmicFarmsCard, ListFarmCard } from "./FarmCard";
import { FarmDetail } from "./FarmDetail";

export const CosmicFarms = () => {
  const [isFarmSelected, setIsFarmSelected] = useState(false);
  const [PoolFarmDetail, setPoolFarmDetail] = useState({
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
    apr: "",
    entryFee: 0,
    exitFee: 0,
  });

  const goToFarmPoolDetails = (info) => {
    setIsFarmSelected(true);
    setPoolFarmDetail({
      ...PoolFarmDetail,
      earn: info.earn,
      earnSvg: info.earnSvg,
      stake1: info.stake1,
      stake1Svg: info.stake1Svg,
      stake2: info.stake2,
      stake2Svg: info.stake2Svg,
      multiplier: info.multiplier,
      liquidity: info.liquidity,
      wallet: info.wallet,
      balance: info.balance,
      apr: info.apr,
      entryFee: info.entryFee,
      exitFee: info.exitFee,
    });
  };

  return (
    <>
      {!isFarmSelected ? (
        <>
          {" "}
          <SecondPageTitle title={"Cosmic Farms"}>
            <p>The land of opportunities!</p>
          </SecondPageTitle>
          <Spacer />
          <ListFarmCard>
            {farmObj.map((info) => (
              <CosmicFarmsCard
                onClick={() => goToFarmPoolDetails(info)}
                key={Math.random()}
                nbStar={info.multiplier}
                isButton={true}
                stake1Svg={info.stake1Svg}
                stake2Svg={info.stake2Svg}
                stake1={info.stake1}
                stake2={info.stake2}
                liquidity={info.liquidity}
                wallet={info.wallet}
                balance={info.balance}
                earn={info.earn}
                earnSvg={info.earnSvg}
                isChildren={false}
                apr={info.apr}
              />
            ))}
          </ListFarmCard>
          <Spacer />
          <VideoFarm />
          <Spacer />
        </>
      ) : (
        <FarmDetail
          onBack={() => setIsFarmSelected(false)}
          nbStar={PoolFarmDetail.multiplier}
          isButton={false}
          stake1Svg={PoolFarmDetail.stake1Svg}
          stake2Svg={PoolFarmDetail.stake2Svg}
          stake1={PoolFarmDetail.stake1}
          stake2={PoolFarmDetail.stake2}
          liquidity={PoolFarmDetail.liquidity}
          wallet={PoolFarmDetail.wallet}
          balance={PoolFarmDetail.balance}
          earn={PoolFarmDetail.earn}
          isChildren={true}
          entryFee={PoolFarmDetail.entryFee}
          exitFee={PoolFarmDetail.exitFee}
        />
      )}
    </>
  );
};

export const VideoFarm = styled.div`
  height: 30rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-image: url("/svg/images/farmImage.jpg");
  background-size: cover;
  box-shadow: 0 0 5px 3px ${({ theme }) => theme.palette.color5};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.palette.color5};
  background-attachment: fixed;
  background-position: center;
`;
