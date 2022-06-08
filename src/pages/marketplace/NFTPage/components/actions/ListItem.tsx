import { useMoralis, useWeb3Contract } from "react-moralis";
import { SquareButton } from "../../../../../components/buttons/squareButton"
import { makeBidOnNFTOptions } from "../../../utils/BidsAndBuyouts";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { aproveListingOptions, listNFTOptions } from "../../../utils/ListItem";
import { useNavigate } from "react-router-dom";
import { checktxn, CheckTxnInputObject } from "../../../../../utils/common";

export const ListItem = ({bidStartPrice, buyoutPrice, tokenId, auctionDuration}) => {

    const bidStartPriceInWei = (bidStartPrice * 10 ** 18).toString();
    const buyoutPriceInWei = (buyoutPrice * 10 ** 18).toString();

	const [hashCheck, setHashCheck] = useState(false);
	
    const hashToastText = "Please wait for the transaction to be verified.";

    const navigate = useNavigate();
    
    const {data, error, runContractFunction, isFetching, isLoading} = useWeb3Contract({});

    const {runContractFunction: runApprove} = useWeb3Contract(aproveListingOptions(tokenId));


    const checkListItemTxnObject : CheckTxnInputObject = {
		hash: "",
		onHold: () => {
			console.log("Verifying transaction");
		},
		onSuccess: ()=> {
            toast.success("NFT successfully listed on marketplace");
            setTimeout(()=>{
                navigate('/marketplace')
            }, 2000)
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

    const buildCheckApproveTxnObject = (hash : string, options) : CheckTxnInputObject => {
        return {
            hash,
            onHold: ()=> {console.log("Verifying transaction")},
            onSuccess: () => {
                options.params._tokenId = tokenId;
                options.params._bidStartPrice = bidStartPriceInWei;
                options.params._buyoutPrice = buyoutPriceInWei;
                options.params._auctionDuration = auctionDuration;
                console.log("Running contract with options: ", options);
                runContractFunction({params: options,
                onSuccess: (d:any)=> {
                    checkListItemTxnObject.hash = d.hash;
                    checktxn(checkListItemTxnObject);
                },
                onError: (err)=> console.log("Some error occurred, ", err)
            })
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
    }


    const listNFT = async () => {

        
        const options = listNFTOptions();

        const approveOptions = aproveListingOptions(tokenId);

        runApprove({
            params:{...approveOptions},
            onSuccess: (data:any)=> {
                console.log("Running on success...");
                checktxn(buildCheckApproveTxnObject(data.hash, options));
            },
            onError: (err) => {
                console.log("Error: ", err);
            }
        })
    }


    return(<SquareButton disabled={buyoutPrice == 0 || bidStartPrice == 0 || auctionDuration == 0} onClick={listNFT}>List your asset</SquareButton>)

}