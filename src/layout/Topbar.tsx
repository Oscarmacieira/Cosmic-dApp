import styled from "styled-components";
import { useMoralis, useNativeBalance, useMoralisWeb3Api } from "react-moralis";
import { RoundButtonSm } from "../components/buttons/roundButton";
import { useEffect, useState } from "react";
import { useWalletAddress } from "../hooks/useAddress";
import { toast } from "react-toastify";

const Topbar = (props: any) => {
  const { authenticate, authError, isAuthenticated, user, auth,logout, chainId } =
    useMoralis();
  const { getBalances, data: balances } = useNativeBalance();
  const { address, shortAddress } = useWalletAddress();
  const Web3Api = useMoralisWeb3Api();
  const [usdcBalance, setUsdcBalance] = useState(0);

  const loginAndReload = () => {
    authenticate({
      signingMessage: "Hello! Welcome to Cosmic Exodus!",
      chainId: 43113,
    })
      .then((user) => console.log("Authentication successful"))
      .catch((e) => {
        console.log("Error logging in");
        console.log(e);
      });
  };


  const logoutAndReload = () => {
    logout()
      .then(() => console.log("Logout successfull, user now is: ", user, "with state: ", auth))
      .catch((e) => {
        console.log("Error logging out");
        console.log(e);
      });
  };


  useEffect(() => {
    if (!chainId || !address) return;
    getBalances({ params: { chain: chainId as any, address } });
  }, [chainId, address, getBalances]);

  useEffect(() => {
    if (!authError) return;
    console.error(authError);
    toast.error("Error on authentication. Check your wallet connection.");
  }, [authError]);
  return (
    <TopbarSection>
      {isAuthenticated && user !== null ? (
        <>
          <div className="wallet-wrapper wallet" title={address || ""}>
            <img alt="wallet" src="svg/wallet.svg" />
            <div className="wallet-wrapper__info wallet">{shortAddress}</div>
          </div>
          <img
            alt="logout"
            className="logout"
            src="svg/power.svg"
            onClick={() => logoutAndReload()}
          />
        </>
      ) : (
        <>
          <RoundButtonSm onClick={() => loginAndReload()}>
            Connect Metamask Wallet
          </RoundButtonSm>
          <div onClick={() => props.onToggle()}></div>
        </>
      )}
    </TopbarSection>
  );
};

const TopbarSection = styled.section`
  height: 50px;
  background: ${({ theme }) => theme.palette.color4};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
  /* position: sticky;
  top: 0px;
  z-index: 6; */

  .wallet-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    img {
      z-index: 2;
      position: relative;
      width: 32px;
      height: 32px;
    }
    &__info {
      position: relative;
      left: -1rem;
      padding: 0.25rem 0.75rem 0.25rem 22px;
      font-size: 12px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      border: 1px solid ${({ theme }) => theme.palette.secondary};
      font-weight: bold;
      &.wallet {
        background: ${({ theme }) => theme.palette.color1};
      }
      &.planet {
        background: ${({ theme }) => theme.palette.tertiary};
        color: ${({ theme }) => theme.palette.color1};
      }
    }
  }

  .logout {
    width: 20px;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
      transform: scale(1.07);
    }
  }
`;

export default Topbar;
