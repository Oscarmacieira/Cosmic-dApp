import coinData from "../../abi/Coin.json"
import publicIgoData from "../../abi/PublicIgo.json";
import { useMoralis } from "react-moralis"



export const approveFunctionOptions = (amountUsdc) =>{
    return {
        abi: coinData.abi.filter((x) => x.name === "approve"),
       contractAddress: String(process.env.REACT_APP_COIN_ADDRESS),
       functionName: "approve",
       params: {
       amount: amountUsdc.toFixed(),
       spender: String(process.env.REACT_APP_PUBLIC_IGO_ADDRESS),
   }

 }
}

export const allowanceFunctionOptions = (address) => {
    return {
        abi: coinData.abi.filter((x) => x.name === "allowance"),
        contractAddress: String(process.env.REACT_APP_COIN_ADDRESS),
        functionName: "allowance",
        params: {
          spender: String(process.env.REACT_APP_PUBLIC_IGO_ADDRESS),
          owner: address,
        },
      }

}

export const buyTokenWithStableCoinFunctionOptions = (amountUsdc) => {
    return {
        abi: publicIgoData.abi.filter((x) => x.name === "buyTokens"),
        contractAddress: String(process.env.REACT_APP_PUBLIC_IGO_ADDRESS),
        functionName: "buyTokens",
        params: {
            _paidAmount: amountUsdc.toFixed(),
        },
    }
}

export const buyTokenWithNativeCurrencyFunctionOptions = (amountAvax) => {
    
    return {
        abi: publicIgoData.abi.filter((x) => x.name === "buyTokensWithNativeCurrency"),
        contractAddress: String(process.env.REACT_APP_PUBLIC_IGO_ADDRESS),
        functionName: "buyTokensWithNativeCurrency",
        msgValue: amountAvax.toFixed(),
        params: {},
      }

}

export const getAvaxPriceFunctionOptions = () => {
    return {
        abi: publicIgoData.abi.filter((x) => x.name === "getLatestPrice"),
        contractAddress: String(process.env.REACT_APP_PUBLIC_IGO_ADDRESS),
        functionName: "getLatestPrice",
        params: {},
      }
} 


export const getPriceNumeratorOptions = () => {
    return {
        abi: publicIgoData.abi.filter((x) => x.name === "priceNumerator"),
        contractAddress: String(process.env.REACT_APP_PUBLIC_IGO_ADDRESS),
        functionName: "priceNumerator",
        params: {},
      }
}

export const getPriceDenominatorOptions = () => {
    return {
        abi: publicIgoData.abi.filter((x) => x.name === "priceDenominator"),
        contractAddress: String(process.env.REACT_APP_PUBLIC_IGO_ADDRESS),
        functionName: "priceDenominator",
        params: {},
      }
}


export const getTokensSoldOptions = () => {
    return {
        abi: publicIgoData.abi,
        contractAddress: String(process.env.REACT_APP_PUBLIC_IGO_ADDRESS),
        functionName: "mintedByPublicIgo",
      }
}


export const getMaxSupplyFromIgoOptions = () => {
    return {
        abi: publicIgoData.abi.filter((x) => x.name === "MAXAMOUNT"),
        contractAddress: String(process.env.REACT_APP_PUBLIC_IGO_ADDRESS),
        functionName: "MAXAMOUNT",
    }
}




export const getAvaxInDollarFormat = (amountAvax, avaxPrice) : string => {
    return (amountAvax/10**18).toFixed(3) + ' @ ~ ' + (avaxPrice/10**8).toFixed(3) + '$';
}


export const saveNewTransactionToDatabase = (investment,user, currency, investmentInDollars, investedAmount, tokensMinted) => {
    const investmentData = {
        user,
        currency,
        invested_amount_in_dollars: parseFloat(investmentInDollars),
        invested_amount: parseFloat(investedAmount),
        tokens_minted: parseFloat(tokensMinted)
    }

    investment.save(investmentData, {onSuccess: () => console.log("Investment correctly saved on database"), onError: (err)=> console.log("Something went wrong: ", err)});
}





export async function addTokenToWallet(address, symbol, decimals, logoURI){

    const tokenAddress = address;
    const tokenSymbol = symbol;
    const tokenDecimals = parseInt(decimals);
    const tokenImage = logoURI;

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const eth = (window as any).ethereum;

      const wasAdded = await eth.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

    } catch (error) {
      console.log(error);
    }

    }

