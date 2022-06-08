import NFTContractData from '../../../abi/CosmicNFT.json'; 
import MarketPlaceContractData from '../../../abi/Marketplace.json';

const nftAddress = process.env.REACT_APP_NFT_ADDRESS;;
const marketplaceAddress = process.env.REACT_APP_MARKETPLACE_ADDRESS;


export const listNFTOptions = (tokenId?: number, bidStartPrice?: string, buyoutPrice?: string, auctionDuration?: number) => {
    return {
        abi: MarketPlaceContractData.abi.filter((x) => x.name === "makeItem"),
        contractAddress: marketplaceAddress,
        functionName: "makeItem",
        params:{
            _nft: nftAddress,
            _tokenId: tokenId,
            _bidStartPrice: bidStartPrice,
            _buyoutPrice: buyoutPrice,
            _auctionDuration: auctionDuration
        }
    }

}

export const aproveListingOptions = (tokenId: number) => {
    return {
        abi: NFTContractData.abi.filter((x) => x.name === "approve"),
        contractAddress: nftAddress,
        functionName: "approve",
        params: {
            to: marketplaceAddress,
            tokenId: tokenId
        }
    }

}