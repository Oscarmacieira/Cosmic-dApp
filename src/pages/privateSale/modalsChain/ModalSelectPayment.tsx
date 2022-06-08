import Modal from "../../../components/ui/Modal"

const ModalSelectPayment = ({
  modalIsOpen,
  onCancel = () => {},
  onConfirm = (data) => {},
}) => {
  const items = [
    { name: "Trust Wallet", image: "svg/wallets/trust-wallet.svg" },
    { name: "Metamask", image: "svg/wallets/metamask.svg" },
  ]

  // const { setState } = useContext(Context)

  const onClose = () => {
    // setState((s) => ({ ...s, selectedWallet: null }))
    onCancel()
  }


  const onSelect = (item) => {
    // setState((s) => ({ ...s, selectedWallet: item }))
    onConfirm(item)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onClose={() => onClose()}
      title="Select Payment Option"
    >
      <div className="flex justify-space-evenly align-items-center">
        {items.map((item, index) => (
          <div
            key={"modal-select-payment-wallet-" + index}
            onClick={() => onSelect(item)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.image} alt={item.name} style={{ height: "6rem" }} />
            <h4 className="m-0 text-center">{item.name}</h4>
          </div>
        ))}
      </div>
      <button onClick={() => onClose()} className="close-modal">
        <img src="svg/arrow-back.svg" alt="Back" />
        Private Sale
      </button>
    </Modal>
  )
}

export default ModalSelectPayment
