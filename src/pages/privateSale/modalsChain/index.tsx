import { useState } from "react"
import ModalConfirm from "./ModalConfirm"
import ModalSelectPayment from "./ModalSelectPayment"

const ModalsChain = ({
  modalChainIsOpen,
  cancelChain = () => {},
  confirmChain = (data) => {},
}) => {
  const [modalActive, setModalActive] = useState(0)
  const modals = [ModalSelectPayment, ModalConfirm]
  const Modal = modals[modalActive]


  const goBack = () => {
    if (modalActive === 0) return cancelChain()
    setModalActive((actual) => actual - 1)
  }

  const goForward = (stepData) => {
    if (modalActive + 1 === modals.length)
      return
    setModalActive((actual) => actual + 1)
  }

  return modalChainIsOpen ? (
    <Modal
      modalIsOpen={true}
      onCancel={goBack}
      onConfirm={(stepData) => goForward(stepData)}
    />
  ) : null
}

export default ModalsChain
