import { useState } from "react";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import styled from "styled-components";
import { SquareButton } from "../../../components/buttons/squareButton";
import { Checkbox } from "../../../components/ui/Checkbox";

export const WarningModal = ({ onConfirm, isKYC, user }) => {
  const [isModal, setIsModal] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const confirm = () => {
    setIsModal(false);
    onConfirm();
  };

  useEffect(() => {
    if (user && !isKYC) setIsModal(true);
  }, [isKYC]);

  return (
    <>
      <ModalWarning isOpen={isModal} title={"Attention!"}>
        <b className="text-center">
          Signing this message, you are confirming that you are:{" "}
        </b>
        <br />
        <div>
          <div className="flex">
            <Checkbox
              className="mr-3"
              checked={isChecked1}
              onClick={() => setIsChecked1(!isChecked1)}
            />
            <p>
              Not a resident of restricted countries from the following list
              United States, Antigua and Barbuda, Algeria, Bangladesh, Bolivia,
              Belarus, Burundi, Burma (Myanmar), Cote D’Ivoire (Ivory Coast),
              Crimea and Sevastopol, Cuba, Democratic Republic of Congo,
              Ecuador, Iran, Iraq, Liberia, Libya, Magnitsky, Mali, Morocco,
              Nepal, North Korea, Somalia, Sudan, Syria, Venezuela, Yemen,
              Zimbabwe.
            </p>
          </div>
          <br />
          <div className="flex">
            <Checkbox
              className="mr-3"
              checked={isChecked2}
              onClick={() => setIsChecked2(!isChecked2)}
            />
            <p>
              {" "}
              Confirming that you are NOT using cryptocurrencies assets on
              Cosmic Exodus that come from drug trade and illegal markets on the
              dark web and other sources marked by any country as illegal. In
              case it is found that your cryptocurrencies have such origins, you
              won't be allowed to use Cosmic Exodus platform in any use case.
            </p>
          </div>
        </div>
        <br />
        <SquareButton onClick={confirm} disabled={!isChecked1 || !isChecked2}>
          I Confirm!
        </SquareButton>
      </ModalWarning>
    </>
  );
};

const ModalWarning = ({
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
    <Wrapper>
      <Overlay />
      <ModalContent>
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
  top: 0vh;
  margin-left: auto;
  margin-right: auto;
  z-index: 49;
  align-self: center;

  @media (max-width: 768px) {
    width: 100vw;
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
