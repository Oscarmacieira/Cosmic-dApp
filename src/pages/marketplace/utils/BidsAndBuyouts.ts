import NFTContractData from '../../../abi/CosmicNFT.json'; 
import MarketPlaceContractData from '../../../abi/Marketplace.json';

const nftAddress = process.env.REACT_APP_NFT_ADDRESS;;
const marketplaceAddress = process.env.REACT_APP_MARKETPLACE_ADDRESS;




export const makeBidOnNFTOptions = (itemId, amount) => {
    return {
        abi: MarketPlaceContractData.abi.filter((x) => x.name === "makeBidOnItem"),
        contractAddress: marketplaceAddress,
        functionName: "makeBidOnItem",
        msgValue: amount,
        params: {
            _itemId: itemId
        }
    }
}


export const buyoutNFTOptions = (itemId, amount) => {
    return {
        abi: MarketPlaceContractData.abi.filter((x) => x.name === "buyoutItem"),
        contractAddress: marketplaceAddress,
        functionName: "buyoutItem",
        msgValue: amount,
        params: {
            _itemId: itemId
        }
    }
}
