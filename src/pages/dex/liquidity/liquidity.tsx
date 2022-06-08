import styled from "styled-components";
import { Card } from "../../../components/shapes/Card";

export const Liquidity = styled(Card)`
  max-width: 560px;
  margin: 35px 0;
  padding: 30px;
  border-radius: 10px;
  align-self: center;
  align-items: center;

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

  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0px;
    .settings {
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
    }
    .backBtn {
      display: flex;
      img {
        margin-right: 10px;
        position: relative;
        top: -4px;
      }
      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }
    }
  }

  .rightTitle {
    width: 100%;
    h4 {
      font-weight: 700;
      font-size: 24px;
      margin: 0px;
    }
    p {
      font-size: 14px;
    }
    .flex {
      img {
        opacity: 0.7;
        margin-right: 10px;
        position: relative;
        left: 5px;
      }
      p {
        color: ${({ theme }) => theme.palette.shy};
      }
    }
  }
  .boxblue {
    height: 50px;
    width: 95%;
    background-color: ${({ theme }) => theme.palette.color4};
    border-radius: 10px;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 0px;
    b {
      margin-top: auto;
      margin-bottom: auto;
      margin-left: 10px;
      padding-right: 20px;
      border-right: 1px solid ${({ theme }) => theme.palette.shy};
    }
    .balanceValue {
      border-right: none;
      font-size: 20px;
    }
  }
`;

export const BoxLiquidity = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.palette.color4};
  border-radius: 20px;
  text-align: center;
  justify-content: center;
  padding: 20px;
  h4 {
    font-weight: 700;
    font-size: 24px;
    margin: 0px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.palette.shy};
  }
`;

export const Margin = styled.div`
  width: 0;
  height: 0;
  margin-top: 60px;
`;

export const Label = styled.label`
  font-size: 14px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const TableTransac = styled.td`
  font-size: 14px;
  @media (max-width: 576px) {
    font-size: 12px;
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

  .group-1 {
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
      font-size: 22px;
      font-weight: 700;
      :focus {
        border: none;
        outline: none;
      }
    }
  }
`;

export const LiquidityField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 12px 16px;
  border-radius: 8px;
  background: #e0eaf8;
  img {
    margin-right: 20px;
  }
`;
