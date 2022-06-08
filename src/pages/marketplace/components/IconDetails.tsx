export const IconDetail = ({ lvl = 9 }) => {
	return (
		<div
			style={{
				position: "absolute",
				right: 16,
				top: 16,
				display: "flex",
				flexDirection: "column",
				background: "rgba(10,14,36,0.75)",
				borderRadius: 10,
				padding: 16,
				gap: 10,
				alignItems: "center",
				justifyContent: "center",
			}}
			className="details"
		>
			<img
				alt="NFT type"
				src="svg/TypesNFT/Hero.svg"
				style={{ width: 30, height: 30 }}
			/>
			<h1 style={{ fontSize: "1rem" }}>LVL {lvl}</h1>
		</div>
	);
};
