import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlackButtonSm } from "../components/buttons/blackButton";
import { Toggler } from "../components/buttons/Toggler";
import { SearchInput } from "../components/input/SearchInput";
import { FilterDropDown } from "../components/ui/FilterDropDown";
import { NavDropdown } from "../components/ui/NavDropDown";

const BlueBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	height: 50px;
	width: 100%;
	background-color: ${({ theme }) => theme.palette.secondary};
	@media (max-width: 768px) {
		justify-content: space-between;
		padding: 5px;
	}

	.filterNav {
		display: flex;
		@media (max-width: 768px) {
			display: flex;
			width: fit-content;
			justify-content: space-between;
		}
	}
	.BtnNav {
		display: flex;
	}
	.filterZone {
		background-color: ${({ theme }) => theme.palette.color1};
		border-radius: 30px;
		position: relative;
		margin-left: 10px;
		top: 5px;
		font-weight: 500;
		display: flex;
		height: 25px;
		width: max-content;
		text-align: start;
		font-size: 11px;
		line-height: 19px;
		justify-content: space-between;
		padding: 4px 5px 0px 10px;
		.toggler {
			margin-left: 8px;
			position: relative;
			top: 3px;
		}
	}

	.mobile {
		display: none;
		@media (max-width: 768px) {
			display: flex;
			width: 95%;
			margin-left: auto;
			margin-right: auto;
			justify-content: space-between;
		}
	}
	.desktop {
		display: flex;
		justify-content: space-evenly;
		width: 860px;
		@media (max-width: 768px) {
			display: none;
		}
	}
`;

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
		top: 3px;
		left: 5px;
		height: 15px;
		width: 15px;
	}
`;

const SmallInputBtn = styled.div`
	height: 30px;
	display: flex;
	width: 30px;
	border-radius: 50px;
	background-color: white;
	position: relative;
	top: 3px;
	img {
		position: relative;
		left: 5px;
		top: 6px;
		height: 15px;
		width: 15px;
	}
	input {
		border: none;
		outline: none;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		padding-left: 10px;
		height: 100%;
		font-size: 16px !important;
		width: 200px;
	}
`;

const SearchTopBar = (props: any) => {
	const ChildToParent = (value: any) => {
		props.onSetPage(value);
	};
	const [isSearching, setIsSearching] = useState(false);

	const clickSearch = () => setIsSearching(!isSearching);

	return (
		<BlueBox>
			<div className="desktop" style={{ justifyContent: "center" }}>
				{props.isSearchBar === true && <SearchInput />}{" "}
				<div className="filterNav">
					{props.FilterOptions.map((value: any) => {
						return (
							<div className="filterZone" key={value.name}>
								{value.name}{" "}
								<div key={value.name + "1"} className="toggler">
									<Toggler />
								</div>
							</div>
						);
					})}
				</div>
				<div className="BtnNav ml-3">
					{props.options.map((value: any) => {
						return (
							<Link to={value.href} key={value.name}>
								<BlackButtonSm
									onClick={() => {
										props.onSetPage(value);
									}}
									disabled={props.currentPage === props.options.indexOf(value)}
								>
									{value.name}
								</BlackButtonSm>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="mobile">
				<SmallInputBtn onClick={clickSearch}>
					{" "}
					<img alt="search" src={`svg/orange-lupe.svg`} />
					{isSearching && <input autoFocus onBlur={clickSearch}></input>}
				</SmallInputBtn>
				<div className="filterNav">
					{!isSearching && (
						<FilterDropDown
							currentPage={props.currentPage}
							onSelect={ChildToParent}
							options={props.FilterOptions}
						/>
					)}
					<div style={{ marginLeft: "20px" }}>
						{props.options.length === 1 ? (
							<BlackButtonSm
								onClick={() => {
									props.onSetPage();
								}}
							>
								{props.options[0].name}
							</BlackButtonSm>
						) : (
							<NavDropdown
								currentPage={props.currentPage}
								onSelect={ChildToParent}
								options={props.options}
							/>
						)}
					</div>
				</div>
			</div>
		</BlueBox>
	);
};

export default SearchTopBar;
