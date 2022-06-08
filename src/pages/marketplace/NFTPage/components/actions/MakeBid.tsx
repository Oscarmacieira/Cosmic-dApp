import { useWeb3Contract } from "react-moralis";
import { SquareButton } from "../../../../../components/buttons/squareButton"
import { makeBidOnNFTOptions } from "../../../utils/BidsAndBuyouts";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { checktxn, CheckTxnInputObject } from "../../../../../utils/common";


export const MakeBid = ({bidValue, itemId}) => {

	const [hashCheck, setHashCheck] = useState(false);
	
    const hashToastText = "Please wait for the transaction to be verified.";
    
    const bid = bidValue;

    const { runContractFunction: runBidOnNFT } = useWeb3Contract(makeBidOnNFTOptions(itemId, bidValue * 10 ** 18));


	const checktxnObject : CheckTxnInputObject = {
		hash: "",
		onHold: () => {
			console.log("Verifying transaction");
		},
		onSuccess: () => {
			setHashCheck(false);
			toast.success("Bid transaction processed! Your funds are locked and will be released once a new bid is submitted");
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


    const makeBidOnNFT = () => {
		runBidOnNFT({
			onSuccess: async (data: any) => {
			  	checktxnObject.hash = data.hash;
				checktxn(checktxnObject);
				toast.success("Bid transaction successfully submitted!");
			},
			onError: (err: any) => {
			  toast.error("Can't invest! " + err.data.message.split(":")[1]);
			},
		  });

	  }


    return(<SquareButton onClick={makeBidOnNFT} className="ml-2">Bid</SquareButton>)



}