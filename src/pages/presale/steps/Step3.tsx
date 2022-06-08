import { useEffect, useState } from "react";
import {
  SquareButton,
  SquareButtonLine,
} from "../../../components/buttons/squareButton";
import styled from "styled-components";
import { NavZone } from "../../../components/ui/NavZone";
import { relative } from "path";
import { useWalletAddress } from "../../../hooks/useAddress";
import {
  useNewMoralisObject,
  useWeb3Contract,
  useNativeBalance,
} from "react-moralis";
import BigNumber from "bignumber.js";
import coinData from "../../../abi/Coin.json";
import publicIgoData from "../../../abi/PublicIgo.json";
import { toast, ToastContainer } from "react-toastify";
import {
  allowanceFunctionOptions,
  approveFunctionOptions,
  buyTokenWithStableCoinFunctionOptions,
  buyTokenWithNativeCurrencyFunctionOptions,
  getAvaxPriceFunctionOptions,
  getAvaxInDollarFormat,
  getPriceNumeratorOptions,
  getPriceDenominatorOptions,
  saveNewTransactionToDatabase,
} from "../utils";
import { checktxn, CheckTxnInputObject } from "../../../utils/common";

export const Step3 = ({ goNextStep, goPreviousStep, amount, asset, user }) => {
  const [isAllowed, setIsAllowed] = useState(false);
  const { address, shortAddress } = useWalletAddress();
  const [hashCheck, setHashCheck] = useState(false);
  const [avaxPrice, setAvaxPrice] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [amountAvax, setAmountAvax] = useState(0);
  const [invested, setInvested] = useState(false);
  const [verifyingAllowance, setVerifyingAllowance] = useState(false);
  const [verifyingInvestment, setVerifyingInvestment] = useState(false);

  const investment = useNewMoralisObject("PrivateSale");

  const hashToastText = "Please wait for the transaction to be verified.";

  const avaxDecimals = 10 ** 18;
  const oraclePrecisionDecimals = 10 ** 8;
  const toUsdcDecimals = new BigNumber("1e+6");
  let integerAmount = new BigNumber(amount.toString());
  let amountUsdc = integerAmount.multipliedBy(toUsdcDecimals);

  let priceUpdateInterval: NodeJS.Timeout;

  useEffect(() => {
    if (asset == "AVAX") {
      setIsAllowed(true);
      updateAVAXPrice();
      priceUpdateInterval = setInterval(() => {
        updateAVAXPrice();
      }, 10000);
    }

    updateTokenPrice();

    return () => {
      if (priceUpdateInterval) clearInterval(priceUpdateInterval);
    };
  }, [asset]);

  useEffect(() => {
    const amountInAvax = amount / (avaxPrice / oraclePrecisionDecimals);
    setAmountAvax(amountInAvax * avaxDecimals);
  }, [avaxPrice]);

  const { runContractFunction: runApproveContract } = useWeb3Contract(
    approveFunctionOptions(amountUsdc)
  );

  const { runContractFunction: runAllowanceContract } = useWeb3Contract(
    allowanceFunctionOptions(address)
  );

  const { runContractFunction: runBuyTokensWithStableCoin } = useWeb3Contract(
    buyTokenWithStableCoinFunctionOptions(amountUsdc)
  );

  const { runContractFunction: runBuyTokensWithNativeCurrency } =
    useWeb3Contract(buyTokenWithNativeCurrencyFunctionOptions(amountAvax));

  const { runContractFunction: getAVAXPrice } = useWeb3Contract(
    getAvaxPriceFunctionOptions()
  );

  const { runContractFunction: getPriceNumerator } = useWeb3Contract(
    getPriceNumeratorOptions()
  );

  const { runContractFunction: getPriceDenominator } = useWeb3Contract(
    getPriceDenominatorOptions()
  );


  const checkApproveTxnObject : CheckTxnInputObject = {
    hash: "",
    onHold : () => setVerifyingAllowance(true),
    onSuccess : () => {
        setHashCheck(false);
        setIsAllowed(true);
        setVerifyingAllowance(false);
        toast.success("Allowance verified!");
      },
      onRepeat: () => {
        if (!hashCheck) {
          setHashCheck(true);
          toast.info(hashToastText, {
            autoClose: false,
            toastId: "hashToast",
          });
        }
      }
  }

  const checkPurchaseWithUSDCObject : CheckTxnInputObject = {
    hash: "",
    onHold : () => setVerifyingAllowance(true),
    onSuccess : () => {
      setHashCheck(false);
      setInvested(true);
      setVerifyingInvestment(false);
      saveNewTransactionToDatabase(
        investment,
        user,
        "USDC",
        amountUsdc,
        amountUsdc,
        amount / tokenPrice
      );
      toast.success("Investment transaction processed!");
    },
      onRepeat: () => {
        if (!hashCheck) {
          setHashCheck(true);
          toast.info(hashToastText, {
            autoClose: false,
            toastId: "hashToast",
          });
        }
      }
  }


  const checkPurchaseWithNativeCurrencyObject : CheckTxnInputObject = {
    hash: "",
    onHold : () => setVerifyingAllowance(true),
    onSuccess :  () => {
      setHashCheck(false);
      setInvested(true);
      setVerifyingInvestment(false);
      saveNewTransactionToDatabase(
        investment,
        user,
        "AVAX",
        amountUsdc,
        amountAvax,
        amount / tokenPrice
      );
      toast.success("Investment transaction processed!");
    },
      onRepeat: () => {
        if (!hashCheck) {
          setHashCheck(true);
          toast.info(hashToastText, {
            autoClose: false,
            toastId: "hashToast",
          });
        }
      }
  }

  const updateTokenPrice = () => {
    let priceNumerator = 0;
    let priceDenominator = 0;
    getPriceNumerator({
      onSuccess: (data: any) => {
        priceNumerator = data;
        getPriceDenominator({
          onSuccess: (data: any) => {
            priceDenominator = data;
            setTokenPrice(priceNumerator / priceDenominator);
          },
          onError: (err) => {
            console.log("Some error getting denominator");
          },
        });
      },
      onError: (err) => {
        console.error(err);
        toast.error("Can't Approve Transaction");
      },
    });
  };

  const updateAVAXPrice = () => {
    getAVAXPrice({
      onSuccess: (data: any) => {
        const priceInDecimals = parseInt(data._hex, 16);
        console.log("AVAX price updated: ", priceInDecimals);
        setAvaxPrice(priceInDecimals);
      },
      onError: (err) => {
        console.error(err);
        toast.error("Can't Approve Transaction");
      },
    });
  };

  const approve = () => {
    runApproveContract({
      onSuccess: (data: any) => {
        checkApproveTxnObject.hash = data.hash;
        checktxn(checkApproveTxnObject);
      },
      onError: (err) => {
        console.error(err);
        toast.error("Can't Approve Transaction");
      },
    });
  };

  const invest = () => {
    if (asset == "USDC") {
      runBuyTokensWithStableCoin({
        onSuccess: async (data: any) => {
          checkPurchaseWithUSDCObject.hash = data.hash;
          checktxn(checkPurchaseWithUSDCObject);
        },
        onError: (err: any) => {
          console.log("Error: ", err);
          toast.error("Can't invest! " + err.data.message.split(":")[1]);
        },
      });
    } else if (asset == "AVAX") {
      runBuyTokensWithNativeCurrency({
        onSuccess: async (data: any) => {
          checkPurchaseWithNativeCurrencyObject.hash = data.hash;
          checktxn(checkPurchaseWithNativeCurrencyObject);
          toast.success("Invested!");
        },
        onError: (err: any) => {
          toast.error("Can't invest! " + err.data.message.split(":")[1]);
        },
      });
    } else {
      toast.error("Something wrong with payment method! Get back to step 2");
    }
  };

  const canInvestAvax = asset == "AVAX" && tokenPrice != 0 && avaxPrice != 0;

  const canInvestUsdc = asset != "AVAX" && tokenPrice != 0;

  return (
    <>
      <p className="text-center" style={{ fontSize: "1.4rem" }}>
        Confirm Steps
      </p>
      <h2 className="shy my-0">Perks</h2>
      <p className="my-0" style={{ opacity: 0.7 }}>
        Profile template
      </p>
      <img
        alt="lootbox"
        src="svg/lootboxs/Normal/normal-open.png"
        style={{
          width: "60%",
          maxWidth: 350,
          position: "relative",
          top: "-50px",
        }}
      />

      <Table>
        <thead>
          <tr>
            <th className="blue main">Loot Box Rank</th>
            <th className="blueLight" style={{ fontSize: "1.2rem" }}>
              Normal
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amount in ${asset}</td>
            <td>
              {asset == "AVAX"
                ? getAvaxInDollarFormat(amountAvax, avaxPrice)
                : amount}
            </td>
          </tr>
          <tr>
            <td>Token amount</td>
            <td>
              {(amount / tokenPrice).toFixed(2)} @ {tokenPrice}$
            </td>
          </tr>
          <tr className="blue">
            <td>Wallet Address</td>
            <td>
              <b>{shortAddress}</b>
            </td>
          </tr>
        </tbody>
      </Table>

      <i>
        Take into consideration swap rates are volatile and refresh each 5
        seconds.
      </i>
      <NavZone
        text={"Step 2"}
        onBack={() => goPreviousStep()}
        children={
          <>
            {!invested ? (
              !isAllowed ? (
                <>
                  {!verifyingAllowance && tokenPrice != 0 && asset != "AVAX" ? (
                    <SquareButtonLine
                      style={{ width: 150 }}
                      onClick={() => approve()}
                    >
                      Allow
                    </SquareButtonLine>
                  ) : null}
                </>
              ) : (
                <>
                  {!verifyingInvestment && (canInvestAvax || canInvestUsdc) ? (
                    <SquareButton
                      style={{ width: 150 }}
                      onClick={() => invest()}
                    >
                      Invest
                    </SquareButton>
                  ) : null}
                </>
              )
            ) : (
              <>
                <SquareButton onClick={() => goNextStep()}>
                  Go Back
                </SquareButton>
              </>
            )}
          </>
        }
      />
    </>
  );
};

const Table = styled.table`
  border-collapse: collapse;
  position: relative;
  top: -50px;
  .blueLight {
    color: #c5fcff;
  }

  .main {
    font-size: 1.2rem;
    font-weight: normal;
  }

  thead {
    th {
      padding: 10px 20px;
      padding-left: 0px;
      padding-right: 50px;
    }
    border-bottom: 2px solid ${({ theme }) => theme.palette.secondary};
  }
  td {
    padding: 5px;
  }
`;
