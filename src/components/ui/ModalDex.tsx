import { useEffect } from "react";
import styled from "styled-components";
const ModalDex = ({
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
      <Overlay onClick={handleOverlayClick} />
      <ModalContent>
        <ModalTitle>
          {title ? <h2 className="title">{title}</h2> : null}
          <h2 className="close" onClick={handleOverlayClick}>
            X
          </h2>
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
  }
  .close {
    cursor: pointer;
    color: #f26929;
    :hover {
      opacity: 0.6;
    }
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

  .shy {
    color: ${({ theme }) => theme.palette.shy};
  }

  .warning {
    text-align: center;
    h4 {
      font-weight: 700;
      font-size: 18px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export default ModalDex;
