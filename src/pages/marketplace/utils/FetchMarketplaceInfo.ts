import NFTContractData from '../../../abi/CosmicNFT.json'; 
import MarketPlaceContractData from '../../../abi/Marketplace.json';

export const nftAddress = process.env.REACT_APP_NFT_ADDRESS;;
export const marketplaceAddress = process.env.REACT_APP_MARKETPLACE_ADDRESS;


export const getListedNFTsOptions = () => {
    return {
        abi: MarketPlaceContractData.abi.filter((x) => x.name === "listItems"),
        contractAddress: marketplaceAddress,
        functionName: "listItems",
    }
}



export const mergeNFTsWithMarketplaceData = (nfts, fetchMarketplaceData, setterMethod) => {

    fetchMarketplaceData({
        onSuccess: (data: any)=>{
            const listedNFTs : any[] = processSmartContractReturnValue(data);

            const finalList = nfts.map((nft)=> {
                const itemInfo = getItemInfo(listedNFTs, parseInt(nft.id));
                if(itemInfo) return {...nft, ...itemInfo} 
            })
            console.log("Final list: ", finalList);
            setterMethod(finalList);
        }, onError: (err) => {
            console.log("Error: ", err);
        }
    })
}


const processSmartContractReturnValue = (data : any[]) => {
    const processedData : any[] = [];
    data.forEach((listedNft: any)=>{
        const itemId =  parseInt(listedNft[0]._hex, 16); 
        const nftAddress = listedNft[1];
        const tokenId = parseInt(listedNft[2]._hex, 16);
        const bidStartPrice = parseInt(listedNft[3]._hex, 16) / 10 ** 18;
        const duration = parseInt(listedNft[4]._hex, 16);
        const buyoutPrice = parseInt(listedNft[5]._hex, 16) / 10 ** 18;
        const seller = listedNft[6];
        const lastBidder = listedNft[7][0];
        const lastBidValue = parseInt(listedNft[7][1]._hex, 16) / 10 ** 18;
        const sold = listedNft[8];
        const auctionStartTimestamp = new Date(parseInt(listedNft[9]._hex, 16) * 1000);
        processedData.push({tokenId, itemId, nftAddress, sold, bidStartPrice, duration, buyoutPrice, seller, lastBidder, lastBidValue, auctionStartTimestamp});
    })

    return processedData;

}


const getItemInfo = (array, value) => {

    const filteredArray = array.filter(o=> o.sold==false); 

    const index = filteredArray.map(object => object.tokenId).indexOf(value);
    console.log("Will return index: ", index);
    return filteredArray[index];

} 