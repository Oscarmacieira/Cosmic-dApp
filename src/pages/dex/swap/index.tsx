import { useState } from "react";
import { useMoralis } from "react-moralis";
import { MaxButton } from "../../../components/buttons/MaxButton";
import { SquareButton } from "../../../components/buttons/squareButton";
import { AssetToSwap, CustomToken } from "../DexComponents/AssetToSwap";
import { Settings } from "../DexComponents/ModalSlippage";
import { TableTransac } from "../liquidity/liquidity";
import { Advertisement, InputGroup, Label, Swap, SwapError } from "./swap";

export const SwapDEX = (props: any) => {
  const { user } = useMoralis();

  const [isAssetA, setIsAssetA] = useState(false);
  const [isAssetB, setIsAssetB] = useState(false);

  const pickTokenA = (
    ticker: string,
    address: string,
    iconSvgPath: string,
    balance: number,
    current_price: number
  ) => {
    setAssetA({
      ...AssetA,

      ticker: ticker,
      address: address,
      iconSvgPath: iconSvgPath,
      balance: balance,
      current_price: current_price,
    });
    setAssetB({
      ...AssetB,
      amount: (AssetA.amount * current_price) / AssetB.current_price,
    });
    setIsAssetA(!isAssetA);
  };

  const pickTokenB = (
    ticker: string,
    address: string,
    iconSvgPath: string,
    balance: number,
    current_price: number
  ) => {
    setAssetB({
      ...AssetB,

      ticker: ticker,
      address: address,
      iconSvgPath: iconSvgPath,
      balance: balance,
      current_price: current_price,
      amount: (AssetA.amount * AssetA.current_price) / current_price,
    });
    setIsAssetB(!isAssetB);
  };

  const [AssetA, setAssetA] = useState({
    ticker: "USDT",
    balance: 1000,
    address: "",
    iconSvgPath: "usdt",
    amount: 0,
    current_price: 1,
  });
  const [AssetB, setAssetB] = useState({
    ticker: "AVAX",
    balance: 17,
    address: "",
    iconSvgPath: "avax",
    amount: 0,
    current_price: 78.23,
  });

  const invertAsset = () => {
    let z = AssetA;
    setAssetA(AssetB);
    setAssetB(z);
  };

  return (
    <>
      {/* SetAssetA */}
      <CustomToken
        onClick={(
          ticker: string,
          address: string,
          iconSvgPath: string,
          balance: number,
          current_price: number
        ) => pickTokenA(ticker, address, iconSvgPath, balance, current_price)}
        isOpen={isAssetA}
        onChange={() => {
          setIsAssetA(!isAssetA);
        }}
      />

      {/* SetAssetB */}
      <CustomToken
        onClick={(
          ticker: string,
          address: string,
          iconSvgPath: string,
          balance: number,
          current_price: number
        ) => pickTokenB(ticker, address, iconSvgPath, balance, current_price)}
        isOpen={isAssetB}
        onChange={() => {
          setIsAssetB(!isAssetB);
        }}
      />
      <Swap>
        <Settings>
          {" "}
          <img
            onClick={() => props.setIsSlippage()}
            className="settings"
            alt="settings"
            src={`svg/settings.svg`}
          />
        </Settings>
        <Label className={"right"}>
          Balance: <b>{AssetA.balance}</b>
        </Label>
        <InputGroup>
          <div className={"group-1"}>
            {" "}
            <AssetToSwap
              onClick={() => setIsAssetA(!isAssetA)}
              ticker={AssetA.ticker}
              tickerImage={AssetA.iconSvgPath}
            />
          </div>
          <div className={"group-2"}>
            <input
              placeholder="0.0"
              type="number"
              value={AssetA.amount}
              onChange={(event) => {
                setAssetA({
                  ...AssetA,
                  amount: event.target.valueAsNumber,
                });
                setAssetB({
                  ...AssetB,
                  amount:
                    (event.target.valueAsNumber * AssetA.current_price) /
                    AssetB.current_price,
                });
              }}
            />
            <MaxButton
              onClick={() => {
                setAssetA({ ...AssetA, amount: AssetA.balance });
                setAssetB({
                  ...AssetB,
                  amount:
                    (AssetA.balance * AssetA.current_price) /
                    AssetB.current_price,
                });
              }}
            >
              Max
            </MaxButton>
          </div>
        </InputGroup>
        <img
          onClick={() => invertAsset()}
          className="Invert-asset"
          alt="SwapAsset"
          src={`svg/swapAsset.svg`}
        />{" "}
        <Label className={"right"}>
          Balance: <b>{AssetB.balance}</b>
        </Label>
        <InputGroup>
          <div className={"group-1"}>
            <AssetToSwap
              onClick={() => setIsAssetB(!isAssetB)}
              ticker={AssetB.ticker}
              tickerImage={AssetB.iconSvgPath}
            />
          </div>
          <div className={"group-2"}>
            <input
              placeholder="0.0"
              type="number"
              value={AssetB.amount}
              onChange={(event) => {
                setAssetB({
                  ...AssetB,
                  amount: event.target.valueAsNumber,
                });
                setAssetA({
                  ...AssetA,
                  amount:
                    (event.target.valueAsNumber * AssetB.current_price) /
                    AssetA.current_price,
                });
              }}
            />
            <MaxButton
              onClick={() => {
                setAssetB({ ...AssetB, amount: AssetB.balance });
                setAssetA({
                  ...AssetA,
                  amount:
                    (AssetB.balance * AssetB.current_price) /
                    AssetA.current_price,
                });
              }}
            >
              Max
            </MaxButton>
          </div>
        </InputGroup>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableTransac>Exchange Rate: &nbsp;&nbsp;&nbsp;</TableTransac>
              <TableTransac className="value">
                <b>
                  1 {AssetA.ticker} ={" "}
                  {(AssetA.current_price / AssetB.current_price).toFixed(6)}{" "}
                  {AssetB.ticker}{" "}
                </b>
              </TableTransac>
            </tr>
            <tr>
              <TableTransac>
                Slippage:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </TableTransac>
              <TableTransac className="value">
                <b>{props.slippage}%</b>
              </TableTransac>
            </tr>
            <tr>
              <TableTransac>Transaction value: &nbsp;&nbsp;&nbsp;</TableTransac>
              <TableTransac className="value">
                <b>{AssetA.amount * AssetA.current_price}$</b>
              </TableTransac>
            </tr>
          </tbody>
        </table>
        {AssetA.amount > AssetA.balance && (
          <SwapError>Please input a valid amount</SwapError>
        )}
        <SquareButton disabled={!user || AssetA.amount > AssetA.balance}>
          Swap
        </SquareButton>
      </Swap>
      {/* <Advertisement>
        {" "}
        <h3>Adverstisement</h3>
      </Advertisement> */}
    </>
  );
};
