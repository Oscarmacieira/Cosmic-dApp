import { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchInput } from "../../../components/input/SearchInput";
import { SortList, WalletSortList } from "../utils/SortList";

export const SortModal = ({ pageNB = 0 }) => {
	const [isOpen, setIsOpen] = useState(false);
	const SortingList = pageNB === 0 ? SortList : WalletSortList;
	const [selected, setSelected] = useState(SortingList[0]);

	useEffect(() => {
		setSelected(SortingList[0]);
	}, [pageNB]);

	const handleOpen = () => setIsOpen(!isOpen);
	const handleSelected = (val: string) => {
		setSelected(val);
		handleOpen();
	};
	return (
		<div
			className="flex align-items-center"
			style={{ top: 15, zIndex: 3, position: "absolute", right: 0 }}
		>
			<div
				className="flex align-items-center mr-1"
				style={{ position: "absolute", top: -10, left: -280 }}
			>
				<SearchInput />
				<p className="ml-3"> Sort by: </p>
			</div>
			<SortModalStyle
				onClick={() => {
					if (!isOpen) {
						handleOpen();
					}
				}}
				onMouseEnter={() => handleOpen()}
				onMouseLeave={() => handleOpen()}
			>
				{isOpen ? (
					SortingList?.map((elem) => (
						<div
							style={{ cursor: "pointer" }}
							onClick={() => handleSelected(elem)}
							key={elem}
							className="flex align-items-center my-2"
						>
							{selected === elem ? (
								<img alt="valid" src="svg/blue-valid.svg" />
							) : (
								<img alt="unvalid" src="svg/shy-valid.svg" />
							)}
							<p>{elem}</p>
						</div>
					))
				) : (
					<div
						className="flex align-items-center"
						onClick={() => {
							if (isOpen) {
								handleOpen();
							}
						}}
						onMouseEnter={() => handleOpen}
					>
						<img alt="valid" src="svg/blue-valid.svg" />
						<p>{selected}</p>{" "}
					</div>
				)}
			</SortModalStyle>
		</div>
	);
};

const SortModalStyle = styled.div`
	width: 230px;
	padding: 5px 10px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.palette.color1};
	border: 1px solid ${({ theme }) => theme.palette.contrast};
	p {
		margin: 1px;
	}
	img {
		width: 18px;
		height: 18px;
		margin-right: 5px;
	}
`;
