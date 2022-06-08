import styled from "styled-components";
import { Card } from "../../../../components/shapes/Card";
import { getShortWallet } from "../../../../utils/shortWallet";

import { SquareButtonSm } from "../../../../components/buttons/squareButton";
export const OtherBid = ({ records }) => {
	return (
		<>
			<Card style={{ marginBottom: 0, gap: 20, height: "100%" }}>
				<h1 className="my-1">Other Market Bid</h1>
				<OtherBidStyle>
					<table>
						<thead>
							<tr>
								<th>Price</th>

								<th>Currency</th>
								<th>Owner</th>
								<th>View</th>
							</tr>
						</thead>
						<tbody>
							{records?.map((elem, idx) => (
								<tr key={elem.owner + idx}>
									<td>
										<b>${elem.price}</b>
									</td>
									<td>
										{elem.currency.map((el) => (
											<img
												style={{ marginInline: 5, height: 15, width: 15 }}
												key={Math.random()}
												alt={el}
												src={`svg/coins/${el.toLowerCase()}.svg`}
											/>
										))}
									</td>
									<td>{getShortWallet(elem.owner)}</td>
									<td>
										<SquareButtonSm>View</SquareButtonSm>
									</td>
								</tr>
							))}{" "}
						</tbody>
					</table>
				</OtherBidStyle>
			</Card>
		</>
	);
};

const OtherBidStyle = styled.div`
	hr {
		background: ${({ theme }) => theme.palette.color5};
		border: none;
		height: 1px;
		width: 100%;
	}
	table {
		width: 100%;
		table-layout: fixed;
	}
	th {
		text-align: start;
		font-weight: normal;
	}
	td {
		padding: 3px;
	}
`;
