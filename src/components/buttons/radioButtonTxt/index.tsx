import { BTexto } from "./styles";
import React from "react";

interface btnProps {
  children: any;
}

export const RadioButtonTxt = (props: btnProps) => {
  return (
    <BTexto>
      <label className="label">
        <div className="label-text">{props.children}</div>
        <div className="toggle">
          <input
            className="toggle-state"
            type="checkbox"
            name="check"
            value="check"
          />

          <div className="toggle-inner">
            <div className="indicator"></div>
          </div>
          <div className="active-bg"></div>
        </div>
      </label>
    </BTexto>
  );
};
