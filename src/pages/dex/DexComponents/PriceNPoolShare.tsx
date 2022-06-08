import { useState } from "react";
import styled from "styled-components";
import ModalDex from "../../../components/ui/ModalDex";

export const PoolShareLink = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: start;
  width: fit-content;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  span {
    margin-right: 10px;
    color: ${({ theme }) => theme.palette.shy};
    position: relative;
    top: -8px;
  }
`;

export const PriceNPoolShare = (props: any) => {
  return (
    <>
      <PoolShareLink onClick={() => props.onOpen()}>
        {" "}
        <span>Prices and Pool Share</span>
        <img className="arrow" alt="arrow" src={`svg/arrow-right.svg`} />
      </PoolShareLink>
    </>
  );
};

export const PriceNPoolModal = (props: any) => {
  return (
    <>
      {" "}
      <ModalDex
        title="Prices and Pool Share:"
        isOpen={props.isOpen}
        onClose={() => props.onClose()}
      >
        <PnSContainer
          title={"0.042341"}
          text="AVAX per USDT"
          icon={"balance"}
          isLight={true}
        />
        <PnSContainer
          title={"81.123"}
          text="USDT per AVAX"
          icon={"balance"}
          isLight={true}
        />
        <PnSContainer
          title={"0.00023%"}
          text="Share of Pool"
          icon={"share"}
          isLight={false}
        />
      </ModalDex>
    </>
  );
};

const PnSContainer = (props: any) => {
  return (
    <>
      {props.isLight ? (
        <LightContainer>
          {" "}
          <div className="box">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
          </div>
          <img alt="icon" src={"svg/" + props.icon + ".svg"} />{" "}
        </LightContainer>
      ) : (
        <DarkContainer>
          {" "}
          <div className="box">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
          </div>
          <img alt="icon" src={"svg/" + props.icon + ".svg"} />{" "}
        </DarkContainer>
      )}
    </>
  );
};

const LightContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;

  .box {
    width: 80%;
    height: fit-content;
    text-align: center;
    background-color: ${({ theme }) => theme.palette.contrast};
    border-radius: 20px;
    color: ${({ theme }) => theme.palette.color1};
    h4 {
      font-weight: 700;
      height: 10px;
    }
    p {
      font-weight: 400;
    }
  }
  img {
    width: 40px;
  }
`;

const DarkContainer = styled(LightContainer)`
  .box {
    background-color: ${({ theme }) => theme.palette.shy};
    color: ${({ theme }) => theme.palette.contrast};
  }
`;
