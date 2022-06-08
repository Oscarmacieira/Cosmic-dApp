import { Button } from "./styles";
import React from "react";

interface btnProps {
  optOne: string;
  optTwo: string;
  function?: React.MouseEventHandler<HTMLDivElement>;
}

export function RadioButton(props: btnProps) {
  const [optOneColor, setOptOne] = React.useState("#fff");
  const [optTwoColor, setOptTwo] = React.useState("#000");

  const swapColors = () => {
    let currentOneColor = optOneColor;
    let currentTwoColor = optTwoColor;

    setOptOne(currentTwoColor);
    setOptTwo(currentOneColor);
  };

  return (
    <Button
      optTwo={props.optTwo}
      optOneColor={optOneColor}
      optTwoColor={optTwoColor}
      onClick={() => {
        swapColors();
      }}
    >
      <div className="switch-button" onClick={props.function}>
        <input className="switch-button-checkbox" type="checkbox"></input>
        <label className="switch-button-label" htmlFor="">
          <span className="switch-button-label-span">{props.optOne}</span>
        </label>
      </div>
    </Button>
  );
}
