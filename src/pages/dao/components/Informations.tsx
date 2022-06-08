import React, { useState } from "react";
import { RoundButton } from "../../../components/buttons/roundButton";
import {
  BoxContainer,
  BoxContainerAutoSecondary,
} from "../../../components/ui/BoxContainer";
import { IconsList } from "./PropositionList";

export const Informations = (props: any) => {
  return (
    <>
      <BoxContainerAutoSecondary>
        <h2 style={{ textAlign: "center" }}>Informations</h2>
        <div
          className="flex"
          style={{ width: "100%", justifyContent: "space-around" }}
        >
          <div>
            <IconsList icon={"doc"} text={props.id + "#"} />{" "}
            <IconsList icon={"flag"} text={props.startDate} />
          </div>
          <div>
            <IconsList icon={"by"} text={props.by} />
            <IconsList icon={"done"} text={props.endDate} />
          </div>
        </div>
      </BoxContainerAutoSecondary>
    </>
  );
};
