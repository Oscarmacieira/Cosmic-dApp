import { useEffect, useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { toast } from "react-toastify";
import styled from "styled-components";
import {
	SquareButton,
	SquareButtonSm,
} from "../../../../components/buttons/squareButton";

import {makeBidOnNFTOptions} from '../../utils/BidsAndBuyouts';
import { ListItem } from "./actions/ListItem";
import { MakeBid } from "./actions/MakeBid";
import { MakeBuyout } from "./actions/MakeBuyout";

export const TakeAction = ({ isBuy, bidPrice, buyoutPrice, itemId, tokenId }) => {
	const [newBid, setNewBid] = useState(0);
	const days = [1, 2, 3];
	const [daySelected, setDaySelected] = useState(0);
	const assets = ["cegt", "usdt", "weth", "wbtc", "avax"];
	const [asset, setAsset] = useState("avax");
	const [bidStartPrice, setBidStartPrice] = useState(0);
	const [saleBuyoutPrice, setSaleBuyoutPrice] = useState(0);
	const [auctionDuration, setAuctionDuration] = useState(0);


	useEffect(()=> {
		setAuctionDuration(24*60*60* daySelected);
	},[daySelected])


	return (
		<>
			<TakeActionStyle>
				<div className="flex align-items-center justify-space-between">
					<h1 className="my-3">{isBuy ? "BID" : "SELL"}</h1>
					{!isBuy && (
						<>
							<div className="flex align-items-center" style={{ gap: 20 }}>
								{days?.map((elem) => (
									<DayButton
										key={`${elem}`}
										onClick={(elem) => setDaySelected(elem)}
										nbDay={elem}
										daySelected={daySelected}
									/>
								))}
								<span className="shy">Days</span>
							</div>
						</>
					)}{" "}
				</div>{" "}
				<hr />
				{isBuy ? (
					<>
						<div
							className="flex-for-desktop align-items-center"
							style={{ gap: 30, justifyContent: "flex-start" }}
						>
							<div className="flex-column div1" style={{ gap: 15 }}>
								<p className="shy my-1" style={{ fontWeight: "normal" }}>
									Bid
								</p>
								<span>
									<b>{bidPrice} AVAX</b>{" "}
									<span className="shy" style={{ fontWeight: "normal" }}>
										/$725.34
									</span>{" "}
								</span>{" "}
								<div className="flex align-items-center">
									{" "}
									<Input
										value={newBid === 0 ? undefined : newBid}
										placeholder="Set your bid"
										onChange={(e) => setNewBid(e.target.valueAsNumber)}
										type="number"
									/>
									<MakeBid bidValue={newBid} itemId={itemId}></MakeBid>
								</div>{" "}
							</div>{" "}
							<div className="flex-column" style={{ gap: 15 }}>
								<p className="shy my-1" style={{ fontWeight: "normal" }}>
									Buyout
								</p>
								<span>
									<b>{buyoutPrice}</b>{" "}
									<span className="shy" style={{ fontWeight: "normal" }}>
										/$780.20
									</span>{" "}
								</span>{" "}
								<div className="flex align-items-center">
									{" "}
									<MakeBuyout value={buyoutPrice} itemId={itemId}></MakeBuyout>
								</div>
							</div>
						</div>
					</>
				) : (
					<div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
						<div className="flex align-items-center" style={{ gap: 20 }}>
							<p className="shy my-1" style={{ fontWeight: "normal" }}>
								Select a currency
							</p>
							<div className="flex align-items-center" style={{ gap: 20 }}>
								{assets?.map((elem) => (
									<img
										onClick={() => {
											if(elem != "avax") {
												toast.error(`${elem.toUpperCase()} currently not supported`);
											}
										}}
										style={{
											opacity: asset === elem ? 1 : 0.4,
											cursor: "pointer",
										}}
										key={elem}
										alt="asset"
										src={`svg/coins/${elem.toLowerCase()}.svg`}
										className="pick-asset"
									/>
								))}
							</div>
						</div>{" "}
						<div className="flex align-items-center" style={{ gap: 20 }}>
							<Input type="number" placeholder="Set a minimum bid" onChange={(e) => setBidStartPrice(e.target.valueAsNumber)}/>
							<Input type="number" placeholder="Set a buyout price" onChange={(e) => setSaleBuyoutPrice(e.target.valueAsNumber)}/>
							<ListItem bidStartPrice={bidStartPrice} buyoutPrice={saleBuyoutPrice} auctionDuration={auctionDuration} tokenId={tokenId}/>
						</div>
					</div>
				)}{" "}
				<hr />
				<div className="flex align-items-center">
					<img alt="details" className="mr-2" src="svg/info.svg" />{" "}
					<p style={{ margin: 0 }}>2% fees associated / 2% royalties</p>
				</div>
				{!isBuy && (
					<>
						{" "}
						<p style={{ margin: 0 }}>
							* There is a 0,1$ of $ticker fee to list an asset
						</p>
					</>
				)}{" "}
			</TakeActionStyle>
		</>
	);
};

const TakeActionStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	height: 100%;
	width: 100%;
	border: 2px solid ${({ theme }) => theme.palette.color4};
	border-radius: 5px;
	padding: 20px;
	hr {
		background: ${({ theme }) => theme.palette.secondary};
		border: 0px;
		height: 1px;
		width: 100%;
	}

	.pick-asset {
		width: 25px;
		height: 25px;
	}
	@media (max-width: 768px) {
		.div1 {
			margin-bottom: 15px;
		}
		margin-bottom: 50px;
	}
`;

const Input = styled.input`
	outline: none;
	background: #e0eaf8;
	border: none;
	padding: 10px 10px;
	border-radius: 5px;
	width: 160px;
`;

const DayButton = ({ nbDay, daySelected, onClick }) => {
	return (
		<>
			{nbDay === daySelected ? (
				<>
					{" "}
					<SelectDayButtonStyle
						onClick={() => onClick(nbDay)}
						className={nbDay === daySelected ? "selected" : ""}
					>
						{nbDay}
					</SelectDayButtonStyle>
				</>
			) : (
				<>
					{" "}
					<DayButtonStyle
						onClick={() => onClick(nbDay)}
						className={nbDay === daySelected ? "selected" : ""}
					>
						{nbDay}
					</DayButtonStyle>
				</>
			)}{" "}
		</>
	);
};

const DayButtonStyle = styled.div`
	border-radius: 50px;
	padding: 10px;
	font-weight: bold;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${({ theme }) => theme.palette.shy};
	border: 4px solid ${({ theme }) => theme.palette.shy};
`;
const SelectDayButtonStyle = styled(DayButtonStyle)`
	color: ${({ theme }) => theme.palette.secondary};
	border: 4px solid ${({ theme }) => theme.palette.secondary};
`;
