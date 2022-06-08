import { NavLink } from "react-router-dom";
import { SearchInput } from "../../components/input/SearchInput";
import { Container } from "../../layout/Container";
import PageTitle from "../../layout/PageTitle";
import SecondPageTitle from "../../layout/SecondPageTitle";
import { Spacer } from "../../layout/Spacer";
import { FiltersCard } from "./components/FiltersCard";
import { NFTCard } from "./components/NFTCard";
import { SortModal } from "./components/SortModal";
import { GridList, GridNFT } from "./style";
import { FakeNFTList } from "./utils/FakeNFTList";
import { useNavigate } from "react-router-dom";
import SearchTopBar from "../../layout/SearchBar";
import { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { getListedNFTsOptions, marketplaceAddress, mergeNFTsWithMarketplaceData, nftAddress } from "./utils/FetchMarketplaceInfo";
import { useMoralisWeb3Api } from 'react-moralis';
import { useWalletAddress } from "../../hooks/useAddress";



const Marketplace = ({ pageNb = 0 }) => {
	const { user } = useMoralis();
	const Web3Api = useMoralisWeb3Api();
	const [page, setPage] = useState(pageNb);
	const {address} = useWalletAddress();


	const [nftsForSale, setNftsForSale] = useState<any[]>([]);
	const [userNFTs, setUserNFTs] = useState<any[]>([]);

	const { runContractFunction: runFetchNFT } = useWeb3Contract(getListedNFTsOptions());



	const navigate = useNavigate();
	useEffect(() => {
		document.title = "Marketplace - Cosmic Exodus";
	});


	useEffect(()=> {
		if(page ===1) {
			fetchUserNFTs();
		} 
	},[page])

	// Sett Page state, object and function
	const options = user
		? [
				{ name: "Marketplace", href: "/marketplace" },
				{ name: "Wallet", href: "/marketplace/wallet" },
				//	{ name: "Auction", href: "/marketplace/auction" },
				//	{ name: "History", href: "/marketplace/history" },
		  ]
		: [{ name: "Marketplace", href: "/marketplace" }];

	const changePage = (value: any) => {
		setPage(options.indexOf(value));
	};

	// Sett filters state, object and function
	const filterOptions = [];
	const [filters, setFilters] = useState(filterOptions);

	const saveFilters = (value: any) => {
		setFilters(value);
	};

	const fetchUserNFTs = async () => {
		const options = {
			chain: "avalanche testnet",
			address: address,
			token_address: nftAddress
		}
	
		const NFTs = await Web3Api.account.getNFTsForContract(options as any);
		const nftObjects = NFTs.result?.map((nft)=>{
			return {id: nft.token_id, metadata: nft.metadata?JSON.parse(nft.metadata):null};
		})
		console.log("Received user NFTs: ", nftObjects);

		setUserNFTs(nftObjects as any);

	}


	const fetchNFTsForContract = async () => {
		const options = {
			chain: "avalanche testnet",
			address: marketplaceAddress,
			token_address: nftAddress
		}
	
		const NFTs = await Web3Api.account.getNFTsForContract(options as any);
		const nftObjects = NFTs.result?.map((nft)=>{
			return {id: nft.token_id, metadata: nft.metadata?JSON.parse(nft.metadata):null};
		})

		await mergeNFTsWithMarketplaceData(nftObjects, runFetchNFT, setNftsForSale);

		
	}

	useEffect(() => {
		window.scrollTo(0, 0);

		fetchNFTsForContract();

	}, []);
	const UsersNFTs = [...FakeNFTList].reverse().splice(0, 5);
	return (
		<>
			<SearchTopBar
				currentPage={page}
				onSetPage={changePage}
				options={options}
				isSearchBar={false}
				FilterOptions={filterOptions}
			/>
			<Container>
				<SecondPageTitle
					title={page === 0 ? "Marketplace" : page === 1 ? "Wallet" : "Auction"}
				>
					<p>Your assets, your choices!</p>
				</SecondPageTitle>
				<Spacer />
				<div
					className="flex justify-space-between align-items-center"
					style={{ width: "100%", position: "relative" }}
				>
					<h1 style={{ fontSize: "1.3rem" }}>
						{page === 0
							? "Listed NFT's"
							: page === 1
							? "Your NFT's'"
							: "Auction"}
					</h1>
					<SortModal pageNB={pageNb} />
				</div>
				<br />

				<GridNFT>
					<div className="div1">
						<FiltersCard />
					</div>{" "}
					<div className="div2">
						<GridList>
							{page === 0 ? (
								<>
									{nftsForSale?.map((elem, idx) => {
										return (
											<NFTCard
												onClick={() => navigate(`/marketplace/nft/${idx}`, {state: elem} as any)}
												key={`${idx}${Math.random}`}
												element={elem}
											/>
										);
									})}
								</>
							) : page === 1 ? (
								<>
									{userNFTs?.map((elem, idx) => {
										return (
											<NFTCard
												isOpen={false}
												key={`${idx}${Math.random}`}
												onClick={() => navigate(`/marketplace/wallet/${idx}`, {state: elem} as any)}
												element={elem}
											/>
										);
									})}
								</>
							) : (
								<p>{page}</p>
							)}{" "}
						</GridList>
					</div>
				</GridNFT>
			</Container>
			<Spacer />{" "}
		</>
	);
};

export default Marketplace;
