import styled from "styled-components";

export const SearchInput = () => {
	return (
		<>
			<InputSearchGroup>
				{" "}
				<img alt="search" src={`svg/orange-lupe.svg`} />
				<input autoFocus={false}></input>
			</InputSearchGroup>
		</>
	);
};

const InputSearchGroup = styled.div`
	background-color: white;
	border-radius: 20px;
	margin-left: 10px;
	position: relative;
	margin-top: 4px;
	z-index: 4;
	height: 25px;
	display: flex;
	input {
		border: none;
		outline: none;
		border-radius: 20px;
		margin-left: 10px;
	}
	img {
		position: relative;
		top: 5px;
		left: 5px;
		height: 15px;
		width: 15px;
	}
`;
