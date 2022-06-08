import styled from "styled-components";

export const RoundButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: white;
	font-size: 14px;
	font-weight: 700;
	line-height: 22px;
	text-align: center;
	justify-content: center;
	padding: 8px 32px;
	width: auto;
	height: calc(8px + 8px + 22px + 1px + 1px);
	background-color: #f26929;
	border: 1px solid #f26929;
	border-radius: 30px;
	box-shadow: 0px 4px 4px 0px #00000040;
	:hover {
		color: #14063a;
		background-color: #30d1ff;
		border-color: #30d1ff;
	}
	:disabled {
		color: rgba(255, 255, 255, 0.5);
		background-color: #787ca9;
		border-color: #787ca9;
	}
	:active {
		color: #14063a;
		background-color: #30d1ff;
		border-color: #30d1ff;
		box-shadow: 0px 0px 8px #30d1ff;
	}
	@media (max-width: 500px) {
		width: 100%;
	}
`;

export const RoundButtonLg = styled(RoundButton)`
	font-size: 20px;
	line-height: 32px;
	height: calc(8px + 8px + 32px + 1px + 1px);
`;

export const RoundButtonSm = styled(RoundButton)`
	font-size: 12px;
	line-height: 19px;
	padding: 4px 16px;
	height: calc(4px + 4px + 16px + 1px + 1px);
`;

export const RoundButtonSmShy = styled(RoundButtonSm)`
	background-color: ${({ theme }) => theme.palette.shy};
	border: 1px solid ${({ theme }) => theme.palette.shy};
`;
