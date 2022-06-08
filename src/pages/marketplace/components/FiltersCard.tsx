import { useState } from "react";
import { Card } from "../../../components/shapes/Card";
import { CheckboxSmWhite } from "../../../components/ui/Checkbox";
import { FilterList } from "../utils/FilterList";
import {
	RoundButtonSm,
	RoundButtonSmShy,
} from "../../../components/buttons/roundButton";
import styled from "styled-components";

export const FiltersCard = () => {
	return (
		<>
			<Card>
				<div className="flex align-items-center justify-center">
					<b style={{ fontSize: "1.7rem" }}>Filters</b>
				</div>{" "}
				{FilterList?.map((elem) => (
					<Filter
						children={""}
						name={elem.name}
						key={`${elem.name} + ${Math.random()}`}
						filters={elem.filters}
					/>
				))}
				<Filter
					filters={null}
					name={"Price"}
					children={
						<div className="flex align-items-center" style={{ gap: 10 }}>
							<Input placeholder="MIN" /> <Input placeholder="MAX" />
						</div>
					}
				/>
				<RoundButtonSm>Apply </RoundButtonSm>
				<RoundButtonSmShy className="mt-2">Clear All</RoundButtonSmShy>
			</Card>
		</>
	);
};

const Filter = ({ name, filters, children }) => {
	const [isOpen, setIsOpen] = useState(true);
	const handleOpen = () => setIsOpen(!isOpen);
	const [isChecked, setIsChecked] = useState(false);
	const handleChecked = () => setIsChecked(!isChecked);

	return (
		<>
			<div className="my-2">
				<div className="flex align-items-center justify-space-between">
					<p style={{ fontSize: "1.3rem", margin: 2 }}>{name}</p>{" "}
					<img
						className="hover-btn"
						style={{
							transform: isOpen ? "rotate(180deg)" : "",
						}}
						onClick={handleOpen}
						alt="arrow"
						src="svg/arrow-down.svg"
					/>
				</div>
				{isOpen && (
					<>
						<div className="open-down">
							{filters !== null ? (
								<>
									{" "}
									{filters?.map((elem: any) => (
										<div
											key={`${elem.name} + ${Math.random()}`}
											className="flex align-items-center"
										>
											{" "}
											<CheckboxSmWhite
												checked={isChecked}
												onClick={handleChecked}
											/>
											<p style={{ margin: 0 }}>{elem}</p>
										</div>
									))}
								</>
							) : (
								children
							)}{" "}
						</div>
					</>
				)}{" "}
			</div>
		</>
	);
};

const FilterCardStyle = styled(Card)`
	background: ${({ theme }) => theme.palette.color3};
`;

const Input = styled.input`
	outline: none;
	border-radius: 10px;
	padding-left: 5px;
	border: 1px solid transparent;
	width: 100%;
	height: 30px;
	&:focus {
		border: 1px solid ${({ theme }) => theme.palette.primary};
	}
`;
