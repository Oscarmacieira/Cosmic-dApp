import { getColor } from "../utils/getColors";

export const Stars = ({ nbStar }) => {
	const stars: JSX.Element[] = [];
	for (let i = 1; i <= nbStar; i++) {
		stars.push(<DisplayStar key={i} />);
	}

	return (
		<div
			style={{
				background: getColor(nbStar),
				padding: "5px 8px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: 5,
			}}
			className="stars"
		>
			{stars}
		</div>
	);
};

const DisplayStar = (props: any) => {
	return (
		<>
			<img
				style={{ width: 14, height: 14, paddingInline: 2 }}
				alt={"star"}
				src={`svg/star.svg`}
			/>
		</>
	);
};
