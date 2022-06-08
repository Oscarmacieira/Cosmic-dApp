import { LinkBtn } from "../../../components/buttons/linkBtn/linkBtn";
import { SquareButton } from "../../../components/buttons/squareButton";
import { BoxZone } from "../../../components/shapes/BoxZone";
import { ListCard } from "../../../components/ui/ListCard";
import SecondPageTitle from "../../../layout/SecondPageTitle";
import { Spacer } from "../../../layout/Spacer";
import { TopNav } from "../../../layout/TopNav";
import styled from "styled-components";
import { ticker } from "../../../utils/ticker";

export const FarmDetail = (props: any) => {
  return (
    <>
      {" "}
      <SecondPageTitle title={"Cosmic Farms"}>
        <div className="flex-for-desktop center">
          <LinkBtn text={`Get ${ticker}-AVAX LP`} />
          <LinkBtn text="View Contract" />
          <LinkBtn text="See Pair info" />
        </div>
      </SecondPageTitle>
      <TopNav text={"COSMIC FARMS"} onBack={() => props.onBack()} />
      <Spacer />
      <ListCard
        nbStar={props.nbStar}
        isButton={false}
        stake1Svg={props.stake1Svg}
        stake2Svg={props.stake2Svg}
        stake1={props.stake1}
        stake2={props.stake2}
        liquidity={props.liquidity}
        wallet={props.wallet}
        balance={props.balance}
        earn={props.earn}
        isChildren={true}
      >
        {" "}
        <b>{props.entryFee}%</b> <span>entry fee | </span>{" "}
        <b>{props.exitFee}%</b> <span>withdraw fee</span>
      </ListCard>
      <Spacer />
      <div className="flex-for-desktop">
        <FarmBox>
          {" "}
          <p>
            {ticker} <span>Earned</span>
          </p>
          <div className="nb-button-container">
            {" "}
            <p className="number">0</p>
            <SquareButton>Approve</SquareButton>
          </div>
        </FarmBox>
        <FarmBox>
          <p>Start Farming</p>
          <div className="nb-button-container">
            {" "}
            <p className="number">&nbsp;</p>
            <SquareButton>Approve</SquareButton>
          </div>
        </FarmBox>
      </div>
      <Spacer />
    </>
  );
};

const FarmBox = styled(BoxZone)`
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
