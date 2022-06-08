import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import FooterCopyright from "./Footer";

type MenuItem = {
	name: string;
	href: string;
	iconSvgPath: string;
	selected?: boolean;
	sublink?: any;
};

const TopZoneBar = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: flex;
		width: 100%;
		height: 80px;
		margin-left: auto;
		margin-right: auto;
		justify-content: space-between;
		background-color: ${({ theme }) => theme.palette.color2};
		.logoSm {
			width: 80px;
			height: 80px;
			margin-top: auto;
			margin-bottom: auto;
		}
	}

	.closeNav {
		margin-right: 25px;
		width: 40px;
		height: 40px;
		margin-top: auto;
		margin-bottom: auto;
		padding: 10px;
		border-radius: 50px;
		fill: red;
		background-color: ${({ theme }) => theme.palette.primary};
		cursor: pointer;
		:hover {
			background-color: ${({ theme }) => theme.palette.secondary};
		}
	}
`;

const Navbar = styled.section`
	height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	box-shadow: 0px 14px 20px 0px #00000029;
	background-color: ${({ theme }) => theme.palette.color2};
	@media (max-width: 768px) {
		height: calc(100vh - 130px);
		scroll-behavior: unset;
		box-shadow: none;
	}

	.footer {
		display: none;
		@media (max-width: 768px) {
			display: block;
			position: absolute;
			bottom: 0;
			text-align: center;
			margin-left: auto;
			margin-right: auto;
			width: 100%;
		}
	}

	@keyframes logoAnim {
		0% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes fadeIn {
		0% {
			left: -200px;
		}
		100% {
			left: 0px;
		}
	}

	.logo {
		height: 8rem;
		margin: 0 0.7rem;
		position: absolute;
		top: -70px;
		cursor: pointer;
		/* animation: logoAnim 2s ease-in-out infinite alternate; */
		animation: fadeIn 2s ease-in-out, logoAnim 2.5s alternate infinite;

		@media (max-width: 768px) {
			display: none;
		}
	}
	nav {
		display: flex;
		flex-grow: 1;
		justify-content: center;
		gap: 2rem;
		@media (max-width: 768px) {
			flex-direction: column;
		}
		.menu-item {
			text-align: center;
			display: flex;
			align-items: center;
			color: ${({ theme }) => theme.palette.contrast};
			text-decoration: none;
			@media (max-width: 768px) {
				margin-left: auto;
				margin-right: auto;
				margin-top: 5px;
				margin-bottom: 5px;
				width: 80%;
				padding-left: 15px;
				padding-right: 15px;
				padding-top: 10px;
				padding-bottom: 10px;

				border-radius: 50px;
				border: 2px solid ${({ theme }) => theme.palette.color2};
				&.selected {
					border: 2px solid ${({ theme }) => theme.palette.secondary};
				}
				&:hover {
					border: 2px solid ${({ theme }) => theme.palette.shy};
				}
			}
			.menu-item:nth-child(1) {
				margin-top: 0px;
			}

			&__image {
				height: 1rem;
				width: 1rem;

				@media (max-width: 768px) {
					height: 2rem;
					width: 2rem;
					margin-left: 10px;
				}
			}
			&__name {
				text-transform: uppercase;
				font-size: 0.9rem;
				margin-left: 0.6rem;
				line-height: 24px;
				font-weight: bold;
				border-bottom: 2px solid transparent;
				@media (max-width: 768px) {
					margin-left: 30px;
				}
			}

			&.selected .menu-item__name {
				border-color: ${({ theme }) => theme.palette.secondary};
				@media (max-width: 768px) {
					border: none;
				}
			}
			&:hover .menu-item__name {
				border-color: ${({ theme }) => theme.palette.shy};
				@media (max-width: 768px) {
					border: none;
				}
			}
		}
	}
`;

const Header = () => {
	let { pathname } = useLocation();
	const params = useParams();
	console.log(params);
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(Boolean);
	const [windowDimenion, detectHW] = useState({
		winWidth: window.innerWidth,
		winHeight: window.innerHeight,
	});

	const ClickLink = () => {
		if (windowDimenion.winWidth <= 768) {
			setIsOpen(false);
		}
	};

	const detectSize = () => {
		detectHW({
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", detectSize);
		if (windowDimenion.winWidth >= 768) {
			setIsOpen(true);
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}

		return () => {
			window.removeEventListener("resize", detectSize);
		};
	}, [windowDimenion]);

	const menuItems: MenuItem[] = [
		{ name: "DEX", href: "/dex", iconSvgPath: "dex", sublink: ["/dex"] },
		{
			name: "Staking",
			href: "/cosmic-farms",
			iconSvgPath: "yieldFarm",
			sublink: ["/cosmic-farms", "/cosmic-yields", "/P2E-farms"],
		},
		{
			name: "Gamefi",
			href: "https://beta.cosmicexodus.finance",
			iconSvgPath: "gamefi",
			sublink: ["/gamefi"],
		},
		{
			name: "Marketplace",
			href: "/marketplace",
			iconSvgPath: "marketplace",
			sublink: [
				"/marketplace",
				"/marketplace/wallet",
				"/marketplace/wallet/:NFTid",
				"/marketplace/nft/:NFTid",
				"/marketplace/history",
				"/marketplace/auction",
			],
		},
		{ name: "DAO", href: "/dao", iconSvgPath: "dao", sublink: ["/dao"] },
		// { name: "Audit", href: "/audit", iconSvgPath: "audit" },
		// { name: "How to Play", href: "/how-to-play", iconSvgPath: "play" },
	];


	const selectedMenuItem = menuItems.find(
		({ sublink }) => sublink && sublink.find((name) => name === pathname)
	);
	if (selectedMenuItem) selectedMenuItem.selected = true;

	return (
		<header>
			<TopZoneBar>
				<Link to="/">
					{" "}
					<img
						src="https://media.discordapp.net/attachments/918938729014505522/945002174537138226/LogoCosmic-Exodus.png?width=636&height=636"
						alt="Cosmic Exodus"
						className="logoSm"
					/>
				</Link>
				{isOpen ? (
					<img
						onClick={() => setIsOpen(false)}
						className="closeNav"
						src="svg/close.svg"
						alt="Close Nav"
					/>
				) : (
					<img
						onClick={() => setIsOpen(true)}
						className="closeNav"
						src="svg/menu.svg"
						alt="Menu"
					/>
				)}
			</TopZoneBar>
			{isOpen && (
				<Navbar>
					<Link to="/">
						{" "}
						<img
							className="logo"
							src="https://media.discordapp.net/attachments/918938729014505522/945002174537138226/LogoCosmic-Exodus.png?width=636&height=636"
							alt="Cosmic Exodus"
						/>
					</Link>
					{String(process.env.REACT_APP_PRIVATE_SALE) === "true" ? (
						<nav />
					) : (
						<nav>
							{menuItems.map(
								({ name, href, sublink, iconSvgPath, selected }, key) => {
									if (name !== "Gamefi") {
										return (
											<>
												<Link
													onClick={() => ClickLink()}
													to={sublink && sublink[0]}
													key={"navbar-item-" + key}
													className={
														`menu-item ` + (selected ? "selected" : "")
													}
												>
													<img
														className="menu-item__image"
														alt={name}
														src={`svg/${iconSvgPath}.svg`}
													/>
													<div className="menu-item__name">{name}</div>
												</Link>
											</>
										);
									} else
										return (
											<>
												<a
													target="_blank"
													rel="noreferrer"
													href={href}
													className="menu-item"
												>
													<img
														className="menu-item__image"
														alt={name}
														src={`svg/${iconSvgPath}.svg`}
													/>
													<div className="menu-item__name">{name}</div>
												</a>
											</>
										);
								}
							)}
							{/* <div className={"footer"}>
                <FooterCopyright />
              </div> */}
						</nav>
					)}
				</Navbar>
			)}
		</header>
	);
};

export default Header;
