import { useEffect, useState } from "react";
import ProgressBar from "../../../components/ui/ProgressBar";
import { useWeb3Contract, useMoralisQuery, useMoralis, useMoralisCloudFunction } from "react-moralis"
import { getMaxSupplyFromIgoOptions, getTokensSoldOptions } from "../utils";
import { getTypeParameterOwner } from "typescript";


export const PreSaleLoader = () => {
    const [tokenAllocation, setTokenAllocation] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [fundingValue, setFundingValue] = useState(0);
    const MAXAMOUNT = 25* 10 **5;

    const {fetch} = useMoralisQuery("PrivateSale");


    useEffect(()=> {
        fetch({
            onSuccess: (data) => {
                let totalTokensMinted = data?.reduce((ac, x) => ac + x.get("tokens_minted"), 0);
                let totalInvestedInDollars = data?.reduce((ac, x) => ac + x.get("invested_amount_in_dollars"), 0);
                setTokenAllocation(totalTokensMinted);
                setFundingValue(totalInvestedInDollars/10**6);
                setRemaining(MAXAMOUNT - totalTokensMinted);
            }
        })
    },[])

    return (<div>
        <div className="flex-for-desktop align-items-center">
      
          <div className="flex ">
            <p className="">Token Allocation: {tokenAllocation.toFixed(2)}</p>{" "}
            <img
              className="mx-3"
              style={{ width: "40px" }}
              alt="ticker"
              src="svg/coins/cegt.svg"
            />{" "}
          </div>
          <p className="shy ">({remaining.toFixed(2)} remaining)</p>
        </div>
        <ProgressBar amount={(tokenAllocation / MAXAMOUNT * 100).toFixed(2)} />
        <div className="flex-for-desktop align-items-center justify-space-between">
          <p className="my-2">
            Funding Value: <b>{fundingValue} $</b>
          </p>{" "}
          <p className="my-2">
            Min. Cap: <b>75000$</b>
          </p>{" "}
        </div>
      </div>)


}