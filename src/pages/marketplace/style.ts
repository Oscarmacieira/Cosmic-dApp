import styled from "styled-components";

export const GridNFT = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 32px;
	grid-row-gap: 0px;

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.div2 {
		grid-area: 1 / 2 / 2 / 6;
	}
`;

export const GridList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 32px;
	grid-row-gap: 32px;
`;
