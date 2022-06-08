import { useState } from "react";
import { BackArrow } from "../../../components/buttons/backArrow/backArrow";
import { MaxButton } from "../../../components/buttons/MaxButton";
import {
  SquareButton,
  SquareButtonLine,
} from "../../../components/buttons/squareButton";
import { SliderInput } from "../../../components/ui/SliderInput";
import { AssetToSwap, CustomToken } from "../DexComponents/AssetToSwap";
import { ImportAsset } from "../DexComponents/ImportAsset";
import { YourLiquidity } from "../DexComponents/liquidityDropDown";
import {
  PriceNPoolModal,
  PriceNPoolShare,
} from "../DexComponents/PriceNPoolShare";
import { LiquidityObject } from "./FakeLObject";
import {
  BoxLiquidity,
  InputGroup,
  Label,
  Liquidity,
  TableTransac,
} from "./liquidity";

export const LiquidityDex = (props: any) => {
  const [isLiquidity, setIsLiquidity] = useState(false);
  const handleLiquidity = () => {
    setIsLiquidity(!isLiquidity);
    setIsAddLiquidity(!isAddLiquidity);
  };

  const [isAddLiquidity, setIsAddLiquidity] = useState(false);
  const handleAddLiquidity = () => setIsAddLiquidity(!isAddLiquidity);

  const [isImportAsset, setIsImportAsset] = useState(false);
  const toggleImportAsset = () => setIsImportAsset(!isImportAsset);

  const [isPriceNPoolShare, setIsPriceNPoolShare] = useState(false);
  const togglPriceNPoolShare = () => setIsPriceNPoolShare(!isPriceNPoolShare);

  const [isAssetA, setIsAssetA] = useState(false);
  const [isAssetB, setIsAssetB] = useState(false);

  const [isRemoveLiquidty, setIsRemoveLiquidty] = useState(false);
  const onRemoveToPool = () => setIsRemoveLiquidty(!isRemoveLiquidty);

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

  const onAddToPool = () => {
    setIsAddLiquidity(!isAddLiquidity);
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
      <Liquidity>
        {isAddLiquidity ? (
          <>
            <div className="top">
              <div className="backBtn" onClick={handleAddLiquidity}>
                <BackArrow style={{ marginRight: "100px" }} /> Back
              </div>
              <PriceNPoolShare onOpen={togglPriceNPoolShare} />
              <img
                onClick={() => props.setIsSlippage()}
                className="settings"
                alt="settings"
                src={`svg/settings.svg`}
              />
            </div>
            <br />
            <div className="rightTitle">
              <h4>Add Liquidity</h4>
              <div className="flex">
                <img alt="info" src="svg/info.svg" />
                <p className="shy">Add liquidity to receive LP tokens</p>
              </div>
            </div>
            <Label className={"right"}>
              Balance: <b>{AssetA.balance}</b>
            </Label>
            <InputGroup>
              <div className={"group-1"}>
                <AssetToSwap
                  onClick={() => setIsAssetA(!isAssetA)}
                  ticker={AssetA.ticker}
                  tickerImage={AssetA.ticker}
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
                {/* <MaxButton
                  onClick={() => {
                    setAssetA({ ...AssetA, amount: AssetA.balance / 2 });
                    setAssetB({
                      ...AssetB,
                      amount:
                        (AssetA.balance * AssetA.current_price) /
                        AssetB.current_price /
                        2,
                    });
                  }}
                >
                  50%
                </MaxButton> */}
              </div>
            </InputGroup>
            <img
              className="Invert-asset"
              alt="SwapAsset"
              src={`svg/plus.svg`}
            />{" "}
            <Label className={"right"}>
              Balance: <b>{AssetB.balance}</b>
            </Label>
            <InputGroup>
              <div className={"group-1"}>
                <AssetToSwap
                  onClick={() => setIsAssetB(!isAssetB)}
                  ticker={AssetB.ticker}
                  tickerImage={AssetB.ticker}
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
                  <TableTransac>
                    <b>
                      {" "}
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
                  <TableTransac>
                    <b>{props.slippage}%</b>
                  </TableTransac>
                </tr>
                <tr>
                  <TableTransac>
                    Transaction value: &nbsp;&nbsp;&nbsp;
                  </TableTransac>
                  <TableTransac>
                    <b>
                      {AssetA.amount * AssetA.current_price +
                        AssetB.amount * AssetB.current_price}
                      $
                    </b>
                  </TableTransac>
                </tr>
              </tbody>
            </table>
            <SquareButton onClick={handleLiquidity}>Approve</SquareButton>
          </>
        ) : isRemoveLiquidty ? (
          <>
            <div className="top">
              <div className="backBtn" onClick={onRemoveToPool}>
                <BackArrow style={{ marginRight: "100px" }} /> Back
              </div>
              <PriceNPoolShare onOpen={togglPriceNPoolShare} />
              <img
                onClick={() => props.setIsSlippage()}
                className="settings"
                alt="settings"
                src={`svg/settings.svg`}
              />
            </div>
            <br />
            <div className="rightTitle">
              <h4>Remove Liquidity</h4>
              <div className="flex">
                <img alt="info" src="svg/info.svg" />
                <p className="shy">You will receive 50% of both assets</p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <SliderInput balance={LiquidityObject[0].balance} />
            </div>
            <img
              alt="arrow"
              src="svg/arrow-down.svg"
              style={{ marginBottom: "20px" }}
            />
            <div className="boxblue">
              <div className="flex">
                <img
                  style={{ width: "30px" }}
                  alt={"asset1"}
                  src={"svg/coins/" + LiquidityObject[0].asset1 + ".svg"}
                />
                <b>{LiquidityObject[0].asset1}</b>
              </div>
              <b className="balanceValue">23123.31241</b>
            </div>
            <span style={{ margin: "0px" }}>+</span>
            <div className="boxblue">
              <div className="flex">
                <img
                  style={{ width: "30px" }}
                  alt={"asset2"}
                  src={"svg/coins/" + LiquidityObject[0].asset2 + ".svg"}
                />
                <b>{LiquidityObject[0].asset2}</b>
              </div>
              <b className="balanceValue">23123.31241</b>
            </div>
            <SquareButton>Remove</SquareButton>
          </>
        ) : (
          <>
            <div className="rightTitle">
              {" "}
              <h4>Your Liquidity</h4>
              <p>Unstake LP's to see them here</p>
            </div>

            <BoxLiquidity>
              {!isLiquidity ? (
                <>
                  <h4>No Liquidity Found</h4>
                  <p>Can't find LP?</p>
                  <SquareButtonLine
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    onClick={toggleImportAsset}
                  >
                    Import Assets
                  </SquareButtonLine>
                </>
              ) : (
                <YourLiquidity
                  onRemoveToPool={onRemoveToPool}
                  onAddToPool={onAddToPool}
                  toggleImportAsset={toggleImportAsset}
                />
              )}
            </BoxLiquidity>

            <SquareButton onClick={handleAddLiquidity}>
              Add Liquidity
            </SquareButton>
          </>
        )}
      </Liquidity>
      {isImportAsset && (
        <ImportAsset onClose={toggleImportAsset} isOpen={isImportAsset} />
      )}
      {isPriceNPoolShare && (
        <PriceNPoolModal
          onClose={togglPriceNPoolShare}
          isOpen={isPriceNPoolShare}
        />
      )}
    </>
  );
};
