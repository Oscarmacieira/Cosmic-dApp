import { useEffect, useState } from "react";
import styled from "styled-components";
import ModalDex from "../../../components/ui/ModalDex";
import { ticker } from "../../../utils/ticker";

type AssetInWallet = {
  ticker: string;
  address: string;
  iconSvgPath: string;
  balance: number;
  current_price: number;
};

const assetInWallet: AssetInWallet[] = [
  {
    ticker: `${ticker}`,
    address: "0xcegt",
    iconSvgPath: "cegt",
    balance: 120.3213124,
    current_price: 2.5,
  },
  {
    ticker: "wBTC",
    address: "0xwbtc",
    iconSvgPath: "wbtc",
    balance: 23.43324,
    current_price: 54243.232,
  },
  {
    ticker: "USDT",
    address: "0xusdt",
    iconSvgPath: "usdt",
    balance: 1231.1238263,
    current_price: 1.002,
  },
  {
    ticker: "AVAX",
    address: "0xavax",
    iconSvgPath: "avax",
    balance: 46353.231,
    current_price: 78.23,
  },
  {
    ticker: "JOE",
    address: "0xjoe",
    iconSvgPath: "joe",
    balance: 23.1895,
    current_price: 8.123,
  },
  {
    ticker: "MIM",
    address: "0xmim",
    iconSvgPath: "mim",
    balance: 324.0159,
    current_price: 1.131,
  },
  {
    ticker: "USDC",
    address: "0xusdc",
    iconSvgPath: "usdc",
    balance: 27.15502234,
    current_price: 0.99,
  },
  {
    ticker: "wETH",
    address: "0xweth",
    iconSvgPath: "weth",
    balance: 46.124124591124,
    current_price: 2464.24,
  },
];

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;

  input {
    width: 100%;
    height: 100%;
    padding-left: 16px;
    border: none;
    background: none;
    font-size: 16px;
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
`;

const InputAsset = styled.div`
  font-size: 10px;
  color: black;
  height: fit-content;
  margin-left: -px;

  @media (max-width: 576px) {
    font-size: 12px;
    margin-left: 0px;
  }

  .assetName_arrow {
    display: flex;

    font-family: "SpaceQuest";
    font-size: 14px;
    font-weight: 700;

    h4 {
      display: block;
    }
    .arrow-down {
      margin-left: 6px;
      margin-top: 5px;
      height: 10px;
      width: 10px;
      cursor: pointer;
    }
  }
`;

const AssetImage = styled.img`
  height: 35px;
  width: 35px;
  margin-top: 3px;
  margin-right: 15px;
  margin-left: -5px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const AssetRow = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
  height: 60px;
  padding: 8px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.color2};
  margin-bottom: 10px;
  outline: none;
  margin-right: 10px;
  color: ${({ theme }) => theme.palette.contrast};
  &:hover {
    background-color: ${({ theme }) => theme.palette.tertiary};
    color: black;
  }
`;

const AssetListBox = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  max-height: 280px;
  overflow-y: scroll;
`;

const AssetLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const AssetTicker = styled.div`
  font-weight: 700;
  margin-left: 20px;
  text-align: start;
  width: 100%;
`;

const Balance = styled.div`
  font-weight: 400;
  position: relative;
  text-align: end;
`;

const AssetList = (props: any) => {
  return (
    <>
      {" "}
      <div style={{ overflow: "hidden" }}>
        <AssetListBox>
          {assetInWallet
            // eslint-disable-next-line array-callback-return
            .filter((info) => {
              if (props.search === "") {
                return info;
              } else if (
                info.ticker
                  .toLowerCase()
                  .includes(props.search.toLocaleLowerCase()) ||
                info.address
                  .toLowerCase()
                  .includes(props.search.toLocaleLowerCase())
              ) {
                return props.search;
              }
            })
            .map(
              (
                { ticker, address, iconSvgPath, balance, current_price },
                key
              ) => (
                <AssetRow
                  key={key}
                  onClick={() =>
                    props.onClick(
                      ticker,
                      address,
                      iconSvgPath,
                      balance,
                      current_price
                    )
                  }
                >
                  <AssetLogo
                    key={"1" + key}
                    className="menu-item__image"
                    alt={ticker}
                    src={`svg/coins/${iconSvgPath}.svg`}
                  />
                  {"      "}
                  <AssetTicker key={"2" + key} className="menu-item__name">
                    {ticker}
                  </AssetTicker>
                  <Balance key={"3" + key}>{balance}</Balance>
                </AssetRow>
              )
            )}
        </AssetListBox>
      </div>
    </>
  );
};

export const AssetToSwap = (props: any) => {
  const onOpen = () => {
    props.onClick();
  };

  return (
    <div
      className="flex"
      style={{ cursor: "pointer" }}
      onClick={() => onOpen()}
    >
      <AssetImage
        alt="SwapAsset"
        src={`svg/coins/` + props.tickerImage + `.svg`}
      />
      <InputAsset>
        Input:
        <div className="assetName_arrow">
          {props.ticker}
          <img
            className="arrow-down"
            alt="SwapAsset"
            src="svg/black-arrow-down.svg"
          />
        </div>
      </InputAsset>
    </div>
  );
};

export const CustomToken = (props: any) => {
  const [searchCoin, setSearchCoin] = useState("");
  useEffect(() => () => (document.body.style.overflow = "unset" as any), []);
  setTimeout(
    () => (document.body.style.overflow = props.isOpen ? "hidden" : "unset")
  );
  return (
    <>
      <ModalDex
        isOpen={props.isOpen}
        onClose={() => {
          setSearchCoin("");
          props.onChange();
        }}
        title="Choose your token"
      >
        <div className="flex justify-space-between align-items-center">
          <InputGroup>
            <input
              onChange={(event) => {
                setSearchCoin(event.target.value);
              }}
              placeholder="Search name or paste address"
            ></input>
          </InputGroup>
        </div>
        <br />
        <AssetList
          onClick={(
            ticker: string,
            address: string,
            iconSvgPath: string,
            balance: number,
            current_price: number
          ) => {
            props.onClick(ticker, address, iconSvgPath, balance, current_price);
            setSearchCoin("");
          }}
          search={searchCoin}
        />
      </ModalDex>
    </>
  );
};
