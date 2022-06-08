import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppStyles } from "./AppStyles";
import { useMoralis } from "react-moralis";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dex from "./pages/dex";
import YieldFarm from "./pages/yieldFarm";
import { useTheme } from "./theme/theme";
import Navbar from "./layout/Navbar";
import Topbar from "./layout/Topbar";
import PrivateSale from "./pages/privateSale";
import DAO from "./pages/dao";
import Audit from "./pages/audit";
import HowToPlay from "./pages/howToPlay";
import AdminPage from "./pages/adminPage";

import FooterCopyright from "./layout/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import themes from "./theme/schema";
import ScrollToTop from "./layout/ScrollToTop";
import { PreSale } from "./pages/presale";
import Marketplace from "./pages/marketplace";
import { NFTPage } from "./pages/marketplace/NFTPage/NFTPage";
function App() {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);

	// Enable Moralis
	const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
		useMoralis();
	useEffect(() => {
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
			enableWeb3({ provider: "metamask" });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

	if (!themeLoaded) return <></>;
	// if (!isWeb3Enabled) return <></>

	const changeTheme = () => {
		selectedTheme.name === "Light"
			? setSelectedTheme(themes.data.dark)
			: setSelectedTheme(themes.data.light);
	};

	return (
		<ThemeProvider theme={selectedTheme}>
			<AppStyles />
			<Router>
				<ScrollToTop />
				<Topbar onToggle={() => changeTheme()} />
				<Navbar />
				{isAuthenticated}

				{String(process.env.REACT_APP_PRE_SALE) === "true" ? (
					<Routes>
						<Route path="/" element={<PreSale />} />
						<Route path="/pre-sale" element={<PreSale />} />
						<Route path="/presale" element={<PreSale />} />
						<Route path="/admin-page" element={<AdminPage />} />
						<Route path="/cosmic-farms" element={<YieldFarm page={0} />} />
						<Route path="/cosmic-yields" element={<YieldFarm page={1} />} />
						<Route path="/P2E-farms" element={<YieldFarm page={2} />} />
						<Route path="/private-sale" element={<PrivateSale />} />
						<Route path="/marketplace" element={<Marketplace />} />
						<Route path="/marketplace/nft/:NFTid" element={<NFTPage />} />
						<Route
							path="/marketplace/wallet"
							element={<Marketplace pageNb={1} />}
						/>
						<Route
							path="/marketplace/wallet/:NFTid"
							element={<NFTPage pageType={"list"} />}
						/>{" "}
						<Route path="/dao" element={<DAO newProposition={false} />} />
						<Route path="/dex" element={<Dex />} />
					</Routes>
				) : (
					<Routes>
						<Route path="/" element={<YieldFarm page={0} />} />
						<Route path="/presale" element={<PreSale />} />
						<Route path="/pre-sale" element={<PreSale />} />
						<Route path="/cosmic-farms" element={<YieldFarm page={0} />} />
						<Route path="/cosmic-yields" element={<YieldFarm page={1} />} />
						<Route path="/P2E-farms" element={<YieldFarm page={2} />} />
						<Route path="/private-sale" element={<PrivateSale />} />
						<Route path="/marketplace" element={<Marketplace />} />
						<Route path="/marketplace/nft/:NFTid" element={<NFTPage />} />
						<Route
							path="/marketplace/wallet"
							element={<Marketplace pageNb={1} />}
						/>{" "}
						<Route
							path="/marketplace/wallet/:NFTid"
							element={<NFTPage pageType={"list"} />}
						/>{" "}
						<Route path="/marketplace/history" element={<Marketplace />} />{" "}
						<Route path="/marketplace/auction" element={<Marketplace />} />
						<Route path="/dao" element={<DAO newProposition={false} />} />
						<Route
							path="/dao/new-proposal"
							element={<DAO newProposition={true} />}
						/>
						<Route path="/dex" element={<Dex />} />
						<Route path="/audit" element={<Audit />} />
						<Route path="/how-to-play" element={<HowToPlay />} />
						<Route path="/admin-page" element={<AdminPage />} />
						<Route path="/*" element={<YieldFarm page={0} />} />
					</Routes>
				)}

				<FooterCopyright />
			</Router>
			<ToastContainer theme="dark" />
		</ThemeProvider>
	);
}

export default App;
