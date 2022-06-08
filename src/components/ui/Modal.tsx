import { useEffect } from "react"
import styled from "styled-components"

const Modal = ({
  children,
  isOpen,
  title = "",
  overlayClose = true,
  onOpen = () => {},
  onClose = () => {},
  onChangeState = (state: boolean) => {},
}) => {
  const changeModalState = (toOpen: boolean) => {
    onChangeState(toOpen)
    if (toOpen) onOpen()
    else onClose()
  }

  const handleOverlayClick = () => {
    if (overlayClose) changeModalState(false)
  }

  useEffect(() => () => (document.body.style.overflow = "unset" as any), [])
  setTimeout(() => (document.body.style.overflow = isOpen ? "hidden" : "unset"))

  if (!isOpen) return null

  return (
    <Wrapper>
      <Overlay onClick={handleOverlayClick} />
      <ModalContent>
          {title ? <h2 className="title">{title}</h2> : null}
          {children}
      </ModalContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  top: 0;
  left: 0;
  z-index: 49;
` 

const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 50;
  top: 0;
  left: 0;
`
const ModalContent = styled.section`
  position: relative;
  background: ${({ theme }) => theme.palette.color2};
  width: 70vw;
  min-height: 50vh;
  z-index: 51;
  margin: 4rem auto;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2.title {
    margin-top: 0;
    text-align: center;
  }

  @media(max-width: 768px) {
    width: 90vw;
  }
`

export default Modal
