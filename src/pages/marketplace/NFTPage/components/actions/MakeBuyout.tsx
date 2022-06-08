import { useWeb3Contract } from "react-moralis";
import { SquareButton } from "../../../../../components/buttons/squareButton"
import { buyoutNFTOptions, makeBidOnNFTOptions } from "../../../utils/BidsAndBuyouts";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checktxn, CheckTxnInputObject } from "../../../../../utils/common";


export const MakeBuyout = ({value, itemId}) => {

	const [hashCheck, setHashCheck] = useState(false);
	
    const hashToastText = "Please wait for the transaction to be verified.";
    
    const { runContractFunction: runBuyoutNFT } = useWeb3Contract(buyoutNFTOptions(itemId, value * 10 ** 18));

	const navigate = useNavigate();


	const checktxnObject : CheckTxnInputObject = {
			hash: "",
			onHold: () => {
				console.log("Verifying transaction");
			},
			onSuccess: () => {
				setHashCheck(false);
				toast.success("Buyout transaction processed!");
				  setTimeout(()=>navigate('/marketplace/wallet'),2000)
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

    const buyoutNFT = () => {
		runBuyoutNFT({
			onSuccess: async (data: any) => {
				checktxnObject.hash = data.hash;
				checktxn(checktxnObject);
			  	toast.success("Buyout transaction successfully submitted!");
			},
			onError: (err: any) => {
			  toast.error("Can't invest! " + err.data.message.split(":")[1]);
			},
		  });

	  }


    return(<SquareButton onClick={buyoutNFT} className="ml-2">Buyout</SquareButton>)



}