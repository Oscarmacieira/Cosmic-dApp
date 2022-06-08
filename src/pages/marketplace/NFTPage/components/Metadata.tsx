import { Stars } from "../../components/Stars";
import { getColor, getRarity, getStatIcon } from "../../utils/getColors";
import styled from "styled-components";
import { IconDetail } from "../../components/IconDetails";
export const Metadata = ({
	isBuy,
	name,
	rarity,
	image,
}) => {
	return (
		<MetaDataGrid>
			{" "}
			<div
				className="div1"
				style={{
					minHeight: 300,
					width: "100%",
					height: "100%",
					borderRadius: 10,
					border: `5px solid ${getColor(rarity)}`,
					position: "relative",
					backgroundPosition: "center",
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover'
				}}
			>
				<IconDetail />
			</div>
			<div className="div2">
				<h1 className="my-3" style={{ fontSize: "3.2rem", marginTop: 0 }}>
					{name}
				</h1>
				<div className="flex align-items-center">
					<Stars nbStar={rarity} />
					{isBuy && (
						<div className="shy flex align-items-center justify-center hover-btn ml-3">
							<img alt="like" src="svg/hearth.svg" className="mr-2" />{" "}
							<b>Mark as favorite</b>
						</div>
					)}{" "}
				</div>{" "}
				<div
					className="flex align-items-center shy my-3"
					style={{ fontWeight: "normal" }}
				>
					{'type'} / {'category'} /{" "}
					<span style={{ marginLeft: 5, color: getColor(rarity) }}>
						{getRarity(rarity)}
					</span>
				</div>
				<p>{'description'}</p>
				<StatGrid>
					{/* TODO change */}
					{Object.entries({
				level: 3,
				experience: 110,
				hp: 110,
				attack: 200,
				}).map((elem) => (
						<StatsZone statName={elem[0].toUpperCase()} pts={elem[1]} />
					))}
				</StatGrid>
			</div>
		</MetaDataGrid>
	);
};

export const StatsZone = ({ statName, pts }) => {
	return (
		<div
			className="flex align-items-center justify-space-between"
			style={{
				padding: 5,
				width: "100%",
				borderRadius: 10,
				background:
					"linear-gradient(90deg, #14215E 0%, rgba(11, 18, 52, 0) 100%)",
			}}
		>
			<div className="flex align-items-center">
				<img alt="" src={getStatIcon("hp")} />
				<h3 className="ml-2 my-1">{statName}</h3>
			</div>{" "}
			<h3 className="my-1">{pts}</h3>
		</div>
	);
};

const StatGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
`;

const MetaDataGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 50px;
	grid-row-gap: 0px;

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.div2 {
		grid-area: 1 / 2 / 2 / 4;
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 50px;
	}
`;
