import styled from "styled-components";

export const Checkbox = ({ checked, className = "", onClick }) => {
	return (
		<BoxStyle className={className} onClick={() => onClick()}>
			{checked ? (
				<img className="check" alt="check" src="svg/check-blue.png" />
			) : (
				<div className="check" />
			)}
		</BoxStyle>
	);
};
const BoxStyle = styled.div`
	display: flex;
	margin: 5px;
	margin-right: 10px;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 50px;
	padding: 5px;
	border-radius: 5px;
	box-shadow: 0px 0px 5px 5px #00000038;
	background-color: ${({ theme }) => theme.palette.color4};

	.check {
		width: 45px;
	}
`;

export const CheckboxSmWhite = ({
	checked = false,
	className = "",
	onClick = () => {},
}) => {
	return (
		<BoxStyleWhiteSm className={className} onClick={() => onClick()}>
			{checked ? (
				<img className="check" alt="check" src="svg/check-blue.png" />
			) : (
				<div className="check" />
			)}
		</BoxStyleWhiteSm>
	);
};

const BoxStyleWhiteSm = styled(BoxStyle)`
	width: 25px;
	height: 25px;
	border: 2px solid ${({ theme }) => theme.palette.contrast};
`;
