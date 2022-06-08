import styled from "styled-components";
import {
  SquareButtonLine,
  SquareButtonLineAlt,
} from "../../../../components/buttons/squareButton";
import { BoxContainer } from "../../../../components/ui/BoxContainer";
import { SliderInput } from "../../../../components/ui/SliderInput";

export const BalanceModal = (props: any) => {
  return (
    <>
      <BoxContainer isInfo={true}>
        <div className="flex-justify-between">
          <div>
            {" "}
            <h2 className="blue">Balance:</h2>
            <p>1000 {props.stake1 + " - " + props.stake2 + " LP"}</p>
          </div>
          <DivIcons>
            <img
              alt="stake1"
              className="icon1"
              src={"svg/coins/" + props.stake1Svg + ".svg"}
            />
            <img
              alt="stake1"
              className="icon2"
              src={"svg/coins/" + props.stake2Svg + ".svg"}
            />
          </DivIcons>
        </div>
        <SliderInput balance={100} />
        <br />
        <div className="flex-justify-between ">
          <SquareButtonLine style={{ width: "48%" }}>Withdraw</SquareButtonLine>
          <SquareButtonLineAlt style={{ width: "48%" }}>
            Withdraw All
          </SquareButtonLineAlt>
        </div>
      </BoxContainer>
    </>
  );
};

const DivIcons = styled.div`
  margin-top: auto;
  margin-bottom: auto;

  img {
    width: 40px;
  }

  .icon1 {
    position: relative;
    z-index: 2;
    left: 20px;
  }

  .icon2 {
    z-index: 1;
    position: relative;
  }
`;
