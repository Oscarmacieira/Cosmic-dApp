import styled from "styled-components";
import { getColor } from "../utils/getColors";
import { IconDetail } from "./IconDetails";
import { Stars } from "./Stars";

export const NFTCard = ({ isOpen = true, onClick, element }) => {

	return (
		<>
			<NFTCardStyle
				onClick={() => {
					onClick();
				}}
				style={{ cursor: "pointer", border: `3.5px solid ${getColor(element?.metadata?.rarity + 1)}` }}
			>
				<IconDetail /> <img alt="NFTimg" src={element?.metadata?.image_uri} />
				<p className="username">@sergiopintodelavega</p>
				<hr />
				<div
					className="flex align-items-center justify-space-between"
					style={{ width: "100%" }}
				>
					<h1>{element?.metadata?.name} #701</h1>
					<Stars nbStar={element?.metadata?.rarity + 1} />{" "}
				</div>{" "}
				{isOpen && (
					<>
						{" "}
						<div
							style={{ width: "100%" }}
							className="flex align-items-center justify-space-between"
						>
							<div>
								<p className="orange">Buy Price</p>
								<b className="orange">{element?.buyoutPrice} AVAX</b>
							</div>
							<div>
								<p className="orange">Bid Price</p>
								<b className="orange">{element?.lastBidValue>0?element?.lastBidValue:element?.bidStartPrice} AVAX</b>
							</div>{" "}
						</div>
					</>
				)}{" "}
			</NFTCardStyle>
		</>
	);
};
const NFTCardStyle = styled.div`
	position: relative;
	width: 100%;
	height: fit-content;
	box-shadow: 0px 3px 27px rgba(0, 0, 0, 0.39);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 10px;
	gap: 10px;
	background: ${({ theme }) => theme.palette.color2};

	p {
		margin: 2px;
	}
	img {
		width: 100%;
	}

	.username {
		margin: 2px;
		font-size: 0.75rem;
	}
	hr {
		width: 100%;
		margin: 0px;
		height: 1px;
		border: 0.4px solid ${({ theme }) => theme.palette.shy};
	}
	h1  {
		margin: 0px;
		font-size: 1.2rem;
	}
	.orange {
		color: #fee929;
	}
`;
