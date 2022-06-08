import React, { useState } from "react";
import { RoundButton } from "../../../components/buttons/roundButton";
import {
  BoxContainer,
  BoxContainerAuto,
} from "../../../components/ui/BoxContainer";

export const VoteContainer = (props: any) => {
  const [selectedOption, setSelectedOption] = useState(undefined);
  const handleSelectOption = (index) => {
    setSelectedOption(index);
    console.log(index);
  };

  return (
    <>
      <BoxContainerAuto>
        <h2>
          {props.isDisabled
            ? "Read the proposition"
            : selectedOption === undefined
            ? "Cast Your Vote"
            : "Thank you for voting"}
        </h2>
        {props.options?.map((info, index) => {
          return (
            <RoundButton
              key={Math.random()}
              onClick={() => handleSelectOption(index)}
              disabled={
                props.isDisabled ||
                (selectedOption !== index && selectedOption !== undefined)
              }
              style={{ width: "100%", marginBottom: "10px" }}
            >
              {info.name}
            </RoundButton>
          );
        })}
      </BoxContainerAuto>
    </>
  );
};
