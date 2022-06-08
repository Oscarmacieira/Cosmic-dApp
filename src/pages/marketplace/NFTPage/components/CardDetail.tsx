import styled from "styled-components";
import { Card } from "../../../../components/shapes/Card";
import { getShortWallet } from "../../../../utils/shortWallet";

export const CardDetail = ({
	owner,
	address,
	price,
	basePrice,
	isBuy,
	fav,
}) => {
	return (
		<>
			<Card style={{ marginBottom: 0 }}>
				<NFTTableStyle>
					<thead>
						<tr>
							{" "}
							<th>Owner</th> <th>Contract Address</th>
							{isBuy && (
								<>
									{" "}
									<th>Buyout Price</th>
									<th>Bid price</th>
								</>
							)}{" "}
							<th>Supply</th>
							<th>Drop rate</th>
							<th>Favorites</th>
						</tr>
					</thead>{" "}
					<tbody>
						<tr>
							<td className="blue" style={{ fontWeight: "bold" }}>
								<h3 className="hidden">Owner </h3> {getShortWallet(owner)}
							</td>
							<td style={{ fontWeight: "bold" }} className="blue">
								<h3 className="hidden">Contract </h3> {getShortWallet(address)}
							</td>
							{isBuy && (
								<>
									{" "}
									<td>
										{" "}
										<h3 className="hidden">Price</h3> {price} AVAX
									</td>
									<td>
										<h3 className="hidden">Base price</h3> {basePrice} AVAX
									</td>
								</>
							)}{" "}
							{/* <td>
								<h3 className="hidden">Supply</h3>
								{supply}
							</td>
							<td>
								<h3 className="hidden">Droprate</h3>
								{droprate}%
							</td> */}
							<td>
								<h3 className="hidden">Favorites</h3>
								{fav}
							</td>
						</tr>
					</tbody>
				</NFTTableStyle>
			</Card>
		</>
	);
};

const NFTTableStyle = styled.table`
	width: 100%;
	table-layout: fixed;
	td {
		text-align: center;
	}
	.hidden {
		color: ${({ theme }) => theme.palette.contrast};
		margin: 0;
		display: none;
	}
	@media (max-width: 768px) {
		thead {
			position: absolute;
			top: -999999px;
		}
		td {
			align-items: center;
			justify-content: space-between;
			display: flex;
		}
		.hidden {
			display: block;
		}
	}
`;
