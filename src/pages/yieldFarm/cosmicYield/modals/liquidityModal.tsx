import styled from "styled-components";
import { LinkBtn } from "../../../../components/buttons/linkBtn/linkBtn";
import {
  SquareButtonLine,
  SquareButtonLineAlt,
} from "../../../../components/buttons/squareButton";
import {
  BoxContainer,
  BoxContainerSecondary,
} from "../../../../components/ui/BoxContainer";
import { SliderInput } from "../../../../components/ui/SliderInput";

export const LiquidityModal = (props: any) => {
  return (
    <>
      <BoxContainerSecondary isInfo={true}>
        <div className="flex">
          {" "}
          <LinkBtn text={"Buy Tokens"} />
          <LinkBtn text={"Add Liquidity"} />
        </div>
        <div className="flex-justify-between align-center">
          <h2
            className="blue"
            style={{ margin: 0, alignSelf: "center", height: "fit-content" }}
          >
            Wallet:
          </h2>
          <p style={{ alignSelf: "center" }}>
            {props.wallet} {props.stake1 + " - " + props.stake2 + " LP"}
          </p>
        </div>
        <SliderInput balance={props.wallet} />
        <br />
        <div className="flex-justify-between ">
          <SquareButtonLine style={{ width: "48%" }}>Deposit</SquareButtonLine>
          <SquareButtonLineAlt style={{ width: "48%" }}>
            Deposit All
          </SquareButtonLineAlt>
        </div>
      </BoxContainerSecondary>
    </>
  );
};
