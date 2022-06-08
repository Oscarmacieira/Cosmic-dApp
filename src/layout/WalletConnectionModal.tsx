import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { SquareButton } from "../components/buttons/squareButton";
import { Checkbox } from "../components/ui/Checkbox";



export const WalletConnectionModal = ({ connectionRequest, setConnectionRequest, user, setWalletToConnect }) => {
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
      if (!user && connectionRequest) setIsModal(true);
    }, [connectionRequest]);
  
    const handleClose = () => {
        setIsModal(false);
        setConnectionRequest(false);
    }


    const handleWalletSelection = (wallet) => {
        setWalletToConnect(wallet);
        setIsModal(false);
        setConnectionRequest(false);
    }

    return (
      <>
        <ConnectionModal isOpen={isModal} onClose={handleClose} title={"Choose wallet to connect"}>
        <div style={{justifyContent:'center', display: 'inline-flex', flexWrap:'wrap', gap:'10%'}}>
            <img onClick={()=> handleWalletSelection('walletconnect')} style={{cursor:'pointer'}} height={150} width={150} alt="walletconnect" src="svg/wallets/walletconnect-logo.svg" />
            <img onClick={()=> handleWalletSelection('metamask')} height={150} width={150} alt="metamask" style={{cursor:'pointer'}} src="svg/wallets/metamask.svg" />
        </div>
          
        </ConnectionModal>
      </>
    );
  };






export const ConnectionModal = ({
    children,
    isOpen,
    title = "",
    overlayClose = true,
    onOpen = () => {},
    onClose = () => {},
    onChangeState = (state: boolean) => {},
  }) => {
    const changeModalState = (toOpen: boolean) => {
      onChangeState(toOpen);
      if (toOpen) onOpen();
      else onClose();
    };
  
    const handleOverlayClick = () => {
      if (overlayClose) changeModalState(false);
    };
  
    useEffect(() => () => (document.body.style.overflow = "unset" as any), []);
    setTimeout(
      () => (document.body.style.overflow = isOpen ? "hidden" : "unset")
    );
  
    if (!isOpen) return null;
  
    return (
      <Wrapper onClick={()=> handleOverlayClick()}>
        <Overlay />
        <ModalContent onClick={(e)=>e.stopPropagation()}>
          <ModalTitle>
            {title ? <h2 className="text-center title">{title}</h2> : null}
          </ModalTitle>
          {children}
        </ModalContent>
      </Wrapper>
    );
  };
  
  const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: auto;
    top: 15vh;
    margin-left: auto;
    margin-right: auto;
    z-index: 49;
    align-self: center;
  
    @media (max-width: 768px) {
      width: 90vw;
    }
  `;
  
  const Overlay = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 50;
    top: 0;
    left: 0;
  `;
  
  const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    h2 {
      margin-top: 0;
      width: 100%;
    }
  `;
  const ModalContent = styled.section`
    position: relative;
    background: ${({ theme }) => theme.palette.color2};
    width: 600px;
    min-height: fit-content;
    z-index: 51;
    margin: 4rem auto;
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      margin: 0px;
      text-align: start;
    }
  
    @media (max-width: 768px) {
      width: 90vw;
    }
  `;