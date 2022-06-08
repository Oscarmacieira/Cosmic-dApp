import { useState } from "react";
import { SquareButtonSm } from "../../../components/buttons/squareButton";
import { BoxContainerSecondary } from "../../../components/ui/BoxContainer";
import { Close, Open, ScrollText } from "../styles";

export const TextContainer = (props: any) => {
  const [isCheck, setIsChecked] = useState(false);
  return (
    <>
      <BoxContainerSecondary>
        {props.isActive ? <Open>Open</Open> : <Close>Closed</Close>}
        <h2>{props.title}</h2>
        <ScrollText>
          <p>{props.description}</p>
          <SquareButtonSm
            disabled={isCheck}
            onClick={() => {
              props.onUnderstand();
              setIsChecked(true);
            }}
          >
            I Understand
          </SquareButtonSm>
        </ScrollText>
      </BoxContainerSecondary>
    </>
  );
};
