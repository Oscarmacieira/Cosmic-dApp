import { SquareButton } from "../../../../components/buttons/squareButton";
import { TimeLock } from "../../../../components/TimeLock.tsx/TimeLock";
import { BoxContainer } from "../../../../components/ui/BoxContainer";

export const RewardModal = (props: any) => {
  return (
    <>
      <BoxContainer isInfo={true}>
        <img
          style={{
            position: "absolute",
            left: "40%",
            top: "10px",
            width: "60%",
            marginRight: "50px",
            opacity: "0.2",
          }}
          alt="cosmic"
          src="svg/coins/cegt.svg"
        />
        <div
          className="flex"
          style={{
            width: "100%",
            height: "50px",
            justifyContent: "space-between",
          }}
        >
          <h2>Cosmic Rewards:</h2>
        </div>
        <h2 className="blue">341.43</h2>
        <p>$232.14</p>
        <div>
          {" "}
          <SquareButton disabled={false}>Approve </SquareButton>
          <TimeLock lockTime={"24h"} />
        </div>
      </BoxContainer>
    </>
  );
};
