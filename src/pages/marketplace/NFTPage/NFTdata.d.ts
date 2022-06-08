
export type NFTdata = {

    metadata: {
        name: string,
        class: number,
        collection: string,
        image_uri: string,
        rarity: number
    },

    auctionStartTimestamp: Date,
    bidStartPrice: number,
    buyoutPrice: number,
    duration: number,
    id: string,
    itemId: number,
    lastBidValue: number,
    lastBidder: string,
    nftAddress: string,
    seller: string,
    sold: boolean,
    tokenId: number

}