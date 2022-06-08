import styled from "styled-components";
import { SquareButtonLg } from "../../../components/buttons/squareButton";
import ModalDex from "../../../components/ui/ModalDex";

export const Settings = styled.div`
  width: 100%;
  height: 15px;
  text-align: end;

  img {
    cursor: pointer;
    &:hover  {
      filter: opacity(0.7);
    }
  }
`;

const ButtonSlippage = styled.button`
  align-items: center;
  color: #313131;
  height: 60px;
  width: 30%;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  font-weight: 700;
  font-size: 20px;

  &:hover {
    background: ${({ theme }) => theme.palette.secondary};
  }

  &:focus {
    border: 3px solid ${({ theme }) => theme.palette.secondary};
    background: ${({ theme }) => theme.palette.color2};
    color: ${({ theme }) => theme.palette.secondary};

    background: none;
  }
`;

export const CustomSlippageInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  justify-content: space-between;

  .group-1 {
    color: #313131;
    flex-shrink: 0;
    width: auto;
    height: 100%;
    position: relative;
    top: 5px;
  }

  .group-3 {
    color: #313131;
    width: 40px;
  }

  .group-2 {
    display: flex;
    width: auto;
    height: 100%;
    @media (max-width: 576px) {
      width: auto;
    }
    /* background: blueviolet; */

    input {
      width: 100%;
      height: 100%;
      padding-left: 16px;
      border: none;
      background: none;
      font-size: 22px;
      font-weight: 700;
      text-align: end;
      :focus {
        border: none;
        outline: none;
      }
      /* Chrome, Safari, Edge, Opera */

      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    /* Firefox */

    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;

const Error1 = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Error2 = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.palette.primary};
`;

export function SlippageError(props) {
  return (
    <>
      {props.value >= 50 ? (
        <Error2>Enter a valid slippage percentage</Error2>
      ) : props.value > 5 ? (
        <Error1>Your transaction may be upfront</Error1>
      ) : null}
    </>
  );
}

export const Slippage = (props: any) => {
  return (
    <>
      {" "}
      <ModalDex
        isOpen={props.isOpen}
        onClose={() => props.onClose()}
        title="Slippage tolerance"
      >
        {" "}
        <div className="flex justify-space-between align-items-center">
          <ButtonSlippage onClick={() => props.onSelect1()}>
            0.1%
          </ButtonSlippage>
          <ButtonSlippage onClick={() => props.onSelect2()}>
            0.5%
          </ButtonSlippage>
          <ButtonSlippage onClick={() => props.onSelect3()}>
            1.0%
          </ButtonSlippage>
        </div>
        <br />
        <CustomSlippageInput>
          <h3 className="group-1">Custom:</h3>
          <div className="group-2">
            <input
              type="number"
              value={props.slippage}
              onChange={(event) => props.onChange(event.target.valueAsNumber)}
            />
          </div>
          <h3 className="group-3">%</h3>
        </CustomSlippageInput>
        <br /> <SlippageError value={props.slippage} /> <br />
        <SquareButtonLg
          disabled={props.slippage > 100 ? true : false}
          onClick={() => props.onClose()}
        >
          Confirm
        </SquareButtonLg>
      </ModalDex>
    </>
  );
};
