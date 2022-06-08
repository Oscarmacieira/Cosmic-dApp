import { useState } from "react";
import {
  SquareButton,
  SquareButtonLg,
} from "../../../components/buttons/squareButton";
import ModalDex from "../../../components/ui/ModalDex";
import { LiquidityField } from "../liquidity/liquidity";
import { CustomSlippageInput } from "./ModalSlippage";

export const ImportAsset = (props: any) => {
  const [AssetDetail, setAssetDetail] = useState({
    ticker: "?",
    address: "Address unfilled",
  });
  const handleInputChange = (value) => {
    setAssetDetail({ ...AssetDetail, address: value });
  };

  const [isUnderstand, setIsUnderstand] = useState(false);
  const handleUnderstand = () => setIsUnderstand(!isUnderstand);
  return (
    <ModalDex
      title="Import Token"
      isOpen={props.isOpen}
      onClose={() => {
        props.onClose();
      }}
    >
      <CustomSlippageInput>
        <div className="group-1">
          <img alt="unknown" src="svg/coins/unknown.svg" />
        </div>
        <div className="group-2" style={{ width: "100%" }}>
          {" "}
          <input
            onChange={(event) => handleInputChange(event.target.value)}
            placeholder="Paste token address"
          ></input>
        </div>
      </CustomSlippageInput>
      <p className="shy">{AssetDetail.address}</p>
      {!isUnderstand ? (
        <div className="warning">
          <h4>Be responsible, trade safe!</h4>
          <p>
            Bad actors in the space may try to scam you... <br />
            <b>
              Beware of token contracts, always make sure it’s the one you’re
              looking for.
            </b>
          </p>
          <br />
          <SquareButton
            onClick={handleUnderstand}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            I Understand
          </SquareButton>
        </div>
      ) : (
        <SquareButton
          onClick={() => {
            props.onClose();
          }}
          style={{ marginLeft: "auto", marginRight: "auto", width: "100%" }}
        >
          Import
        </SquareButton>
      )}
    </ModalDex>
  );
};
