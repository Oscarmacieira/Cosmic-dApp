import styled from "styled-components";
import { Card } from "../../../components/shapes/Card";

export const Swap = styled(Card)`
  max-width: 560px;
  margin: 30px 0;
  padding: 30px;
  border-radius: 10px;
  align-self: center;
  align-items: center;

  .Invert-asset {
    cursor: pointer;
    margin-left: 60px;
    margin-right: auto;
    @media (max-width: 576px) {
      margin-left: 30px;
    }

    &:hover {
      filter: opacity(0.7);
    }
  }

  > * {
    margin-bottom: 5px;
  }

  > button {
    margin: 20px 0;
  }

  > div {
    margin: 0 0 25px 0;
  }

  .right {
    align-self: flex-end;
  }
`;

export const Margin = styled.div`
  width: 0;
  height: 0;
  margin-top: 30px;
`;

export const Label = styled.label`
  font-size: 14px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
  .settings {
    position: relative;
    cursor: pointer;
    margin-right: 0;
    margin-left: auto;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  .value {
    text-align: end;
    font-weight: 700;
    width: 100%;
  }

  .group-1 {
    color: #313131;

    flex-shrink: 0;
    width: 110px;
    height: 100%;
    border-right: 1px solid #000;
    @media (max-width: 576px) {
      width: 66px;
    }
  }

  .group-2 {
    display: flex;
    width: calc(100% - 111px);
    height: 100%;
    @media (max-width: 576px) {
      width: calc(100% - 67px);
    }

    input {
      width: 100%;
      height: 100%;
      padding-left: 16px;
      border: none;
      background: none;
      font-size: 18px;
      font-weight: 700;
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

export const Advertisement = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export const SwapError = styled.b`
  color: ${({ theme }) => theme.palette.primary};
  margin-left: auto;
  margin-right: auto;
`;
