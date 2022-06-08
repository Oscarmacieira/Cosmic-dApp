import { useState } from "react";
import { AssetsIcons } from "../../../components/ui/AssetIcons";
import styled from "styled-components";
import { LiquidityObject } from "../liquidity/FakeLObject";
import {
  SquareButton,
  SquareButtonLine,
} from "../../../components/buttons/squareButton";

export const YourLiquidity = (props: any) => {
  return (
    <>
      <LiquidityContent>
        {LiquidityObject.map((info, key) => {
          return (
            <LiquidityDropDown
              key={key}
              onRemoveToPool={() => props.onRemoveToPool()}
              onAddToPool={() => props.onAddToPool()}
              asset1={info.asset1}
              asset2={info.asset2}
              balance={info.balance}
              pooled_asset1={info.pooled_asset1}
              pooled_asset2={info.pooled_asset2}
              share={info.share}
              value={info.value}
            />
          );
        })}
      </LiquidityContent>
      <SquareButtonLine
        style={{ marginLeft: "auto", marginRight: "auto" }}
        onClick={() => props.toggleImportAsset()}
      >
        Import Assets
      </SquareButtonLine>
    </>
  );
};

const LiquidityDropDown = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const id = `a` + Math.random();

  return (
    <>
      <div className="l-dropdown" id={id}>
        <div className="flex">
          <AssetsIcons
            asset1={props.asset1.toLowerCase()}
            asset2={props.asset2.toLowerCase()}
          />
          <div className="title">
            <h4>
              {" "}
              {props.asset1} / {props.asset2}
            </h4>
            <p>
              {props.balance} | ${props.value}
            </p>
          </div>
        </div>
        <img
          className={!isOpen ? "arrow" : "open-arrow"}
          onClick={() => {
            toggleOpen();
          }}
          style={{ width: "25px" }}
          alt="arrow-down"
          src="svg/arrow-down.svg"
        />
      </div>
      {isOpen && (
        <div className="l-drop-content">
          <div className="box-dropContent">
            <div className="flex">
              <img
                style={{ width: "25px", marginRight: "10px" }}
                alt="asset1"
                src={"svg/coins/" + props.asset1.toLowerCase() + ".svg"}
              />{" "}
              Pooled {props.asset1}
            </div>
            <b>{props.pooled_asset1}</b>
          </div>
          <div className="box-dropContent">
            <div className="flex">
              <img
                style={{ width: "25px", marginRight: "10px" }}
                alt="asset1"
                src={"svg/coins/" + props.asset2.toLowerCase() + ".svg"}
              />{" "}
              Pooled {props.asset2}
            </div>
            <b>{props.pooled_asset2}</b>
          </div>
          <div className="box-dropContent">
            <div className="flex">
              <img
                style={{ width: "25px", marginRight: "10px" }}
                alt="share"
                src={"svg/share.svg"}
              />{" "}
              Share of the {props.asset1}/{props.asset2} pool:
            </div>
            <b>{props.share}%</b>
          </div>
          <div
            className="flex"
            style={{
              width: "100%",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <SquareButton onClick={() => props.onRemoveToPool()}>
              Remove
            </SquareButton>
            <BtnAddtoPool onClick={() => props.onAddToPool()}>
              {" "}
              <span style={{ position: "relative", top: "10px" }}>
                Add to pool
              </span>{" "}
              <img
                style={{ width: "10px", marginLeft: "10px" }}
                alt="arrow"
                src="svg/arrow-right.svg"
              />
            </BtnAddtoPool>
          </div>
        </div>
      )}
    </>
  );
};

const BtnAddtoPool = styled.div`
  display: flex;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const LiquidityContent = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  margin-bottom: 20px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.color5};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.shy};
    width: 20px;
  }
  .l-dropdown,
  .l-open-arrow {
    margin-right: 10px;

    display: flex;
    text-align: start;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;

    padding-top: 5px;
    padding-bottom: 5px;

    border-bottom: 1px solid ${({ theme }) => theme.palette.shy};

    .arrow,
    .open-arrow {
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
    }
    .open-arrow {
      transform: rotate(180deg);
    }
    .title {
      position: relative;
      top: 10px;
      h4 {
        font-size: 20px;
        height: 15px;
      }
    }
  }
  .l-drop-content {
    position: relative;
    top: -3px;
    padding-top: 10px;
    background-color: ${({ theme }) => theme.palette.color4};
    border-bottom: 1px solid ${({ theme }) => theme.palette.shy};
    margin-bottom: 20px;
    padding-bottom: 20px;
    margin-right: 10px;
    padding-right: 20px;
    .box-dropContent {
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      padding: 10px;
    }
  }
`;
