import { useState } from "react";
import { SquareButton } from "../../../components/buttons/squareButton";
import styled from "styled-components";
import { NavZone } from "../../../components/ui/NavZone";

export const Step2 = ({
  goNextStep,
  goPreviousStep,
  amount,
  setAmount,
  asset,
  setAsset,
}) => {
  const handleAmount = (e) => setAmount(e.target.valueAsNumber);
  const saveEmail = () => {
    goNextStep();
  };
  return (
    <>
      <p className="text-center" style={{ fontSize: "1.4rem" }}>
        Introduce amount
      </p>
      <div className="flex align-items-center">
        <Input type="number" onChange={(e) => handleAmount(e)} value={amount} />{" "}
        <div
          style={{
            position: "relative",
            left: "-30px",
            fontWeight: "bold",
          }}
        >
          $
        </div>
      </div>{" "}
      <p className="text-center" style={{ fontSize: "1.4rem" }}>
        Select Currency
      </p>
      <div className="flex align-items-center">
        <AssetCard
          onClick={() => setAsset("AVAX")}
          style={{ border: asset === "AVAX" ? "1px solid #30D1FF" : "" }}
        >
          <img alt="avax" src="svg/coins/avax.svg" />
          AVAX
        </AssetCard>
        <AssetCard
          onClick={() => setAsset("USDC")}
          style={{ border: asset === "USDC" ? "1px solid #30D1FF" : "" }}
        >
          <img alt="usdc" src="svg/coins/usdc.svg" />
          USDC
        </AssetCard>
      </div>
      <NavZone
        text={"Pre Sale"}
        onBack={() => goPreviousStep()}
        children={
          <SquareButton
            style={{ width: "150px" }}
            disabled={amount < 250 || asset === ""}
            onClick={() => goNextStep()}
          >
            Confirm
          </SquareButton>
        }
      />
    </>
  );
};

const AssetCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid transparent;
  margin-inline: 20px;
  animation: 1s ease-in-out;
  border-radius: 10px;
  img {
    width: 40px;
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.secondary};
  }
  .selected {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 5px 15px;
  outline: none;
  background: ${({ theme }) => theme.palette.shy};
  color: ${({ theme }) => theme.palette.contrast};
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.palette.shy};
  ::placeholder {
    color: ${({ theme }) => theme.palette.contrast};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.secondary};
  }
`;
