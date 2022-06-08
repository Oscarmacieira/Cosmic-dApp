import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StickerBottomLeft } from "../../../components/ui/Stickers";
import { Container } from "../../../layout/Container";
import { Spacer } from "../../../layout/Spacer";
import { TopNav } from "../../../layout/TopNav";
import { Stars } from "../components/Stars";
import { FakeNFTList } from "../utils/FakeNFTList";
import { getColor, getRarity } from "../utils/getColors";
import { CardDetail } from "./components/CardDetail";
import { Metadata } from "./components/Metadata";
import { OtherBid } from "./components/OtherBid";
import { TakeAction } from "./components/TakeAction";
import { useLocation } from "react-router-dom";
import { NFTdata } from "./NFTdata";

export const NFTPage = ({ pageType = "buy"}) => {
	const isBuy = pageType === "buy" ? true : false;
	const location = useLocation();
	
	const NFTdata : NFTdata = (location.state as NFTdata);


	const navigate = useNavigate();
	const { NFTid } = useParams();


	const name = NFTdata.metadata.name;
	const rarity = NFTdata.metadata.rarity + 1;
	const collection = NFTdata.metadata.collection;
	const itemId = NFTdata.itemId;
	const tokenId = isBuy?NFTdata.tokenId:parseInt(NFTdata.id);
	// const description = NFTdata.nft.description;
	const image = NFTdata.metadata.image_uri;

	const owner = NFTdata.seller;
	const address = NFTdata.nftAddress;
	const buyoutPrice = NFTdata.buyoutPrice;
	const lastBidPrice = NFTdata.lastBidValue > 0?NFTdata.lastBidValue: NFTdata.bidStartPrice;
	// const supply = NFTdata.nft.supply;
	// const droprate = NFTdata.nft.droprate;
	const fav = 5;

	// const records = NFTdata.nft.records;

	return (
		<>
			<StickerBottomLeft />
			<Container style={{ gap: 50 }}>
				<TopNav
					text={isBuy ? "MARKETPLACE" : "WALLET"}
					onBack={() => {
						navigate(isBuy ? "/marketplace" : "/marketplace/wallet");
					}}
				/>
				<Metadata
					isBuy={isBuy}
					name={name}
					rarity={rarity}
					image={image}
				/>
				{isBuy? <>
				<CardDetail
					isBuy={isBuy}
					owner={owner}
					address={address}
					price={buyoutPrice}
					basePrice={lastBidPrice}
					fav={fav}
				/>
				<div style={{ gap: 50 }} className="flex-for-desktop">
				  <TakeAction isBuy={isBuy} bidPrice={lastBidPrice} buyoutPrice={buyoutPrice} itemId={itemId} tokenId={tokenId}/>
					{/* <OtherBid records={records} /> */}
				</div>
				</>: <div style={{ gap: 50 }} className="flex-for-desktop">
				  <TakeAction isBuy={isBuy} bidPrice={lastBidPrice} buyoutPrice={buyoutPrice} itemId={itemId} tokenId={tokenId}/>
					{/* <OtherBid records={records} /> */}
				</div>}
				
			</Container>
			<Spacer />
		</>
	);
};
