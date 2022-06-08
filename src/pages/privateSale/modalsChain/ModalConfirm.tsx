import { useContext, useState } from "react"
import { useWeb3Contract } from "react-moralis"
import { toast } from "react-toastify"
import styled from "styled-components"
import { SquareButton } from "../../../components/buttons/squareButton"
import Modal from "../../../components/ui/Modal"
import { Context } from "../context"
import investData from "../../../abi/Invest.json"
import coinData from "../../../abi/Coin.json"
import BigNumber from "bignumber.js"
import { error } from "console"

const ModalConfirm = ({
  modalIsOpen,
  onCancel = () => {},
  onConfirm = (data?) => {},
}) => {
  const { state, setState } = useContext(Context)
  const [hashCheck, setHashCheck] = useState(false)
  const [confirmOption, setConfirmOption] = useState("Approve")
  const hashToastText = "Please wait for the transaction to be verified."
  const { selectedLootbox: lootbox, whitelist } = state
  const tokenAmount = whitelist?.get("amount") / (lootbox?.price || 1)
  const toBigNumber = new BigNumber("1e+18")
  let amountBigNumber = new BigNumber(whitelist?.get("amount").toString())
  amountBigNumber = amountBigNumber.multipliedBy(toBigNumber)

  const { runContractFunction: runApproveContract } = useWeb3Contract({
    abi: coinData.abi.filter((x) => x.name === "approve"),
    contractAddress: String(process.env.REACT_APP_COIN_ADDRESS),
    functionName: "approve",
    params: {
      amount: amountBigNumber.toFixed(),
      spender: String(process.env.REACT_APP_INVEST_ADDRESS),
    },
  })

  const { runContractFunction: runAllowanceContract } = useWeb3Contract({
    abi: coinData.abi.filter((x) => x.name === "allowance"),
    contractAddress: String(process.env.REACT_APP_COIN_ADDRESS),
    functionName: "allowance",
    params: {
      spender: String(process.env.REACT_APP_INVEST_ADDRESS),
      owner: whitelist?.get("walletAddress"),
    },
  })

  const { runContractFunction: runInvestContract } = useWeb3Contract({
    abi: investData.abi.filter((x) => x.name === "invest"),
    contractAddress: String(process.env.REACT_APP_INVEST_ADDRESS),
    functionName: "invest",
    params: {
      _amount: amountBigNumber.toFixed(),
    },
  })

  const checkAllowance = () => {
    runAllowanceContract({
      onSuccess: (data: any) => {
        const approvedBigNumber = new BigNumber(data._hex.toString())

        if (approvedBigNumber.isLessThan(amountBigNumber)) {
          approve()
        } else {
          invest()
        }
        // toast.success("Approved on whitelist!")
      },
      onError: (err) => {
        console.error(err)
        // toast.error("Can't approve on whitelist!")
      },
    })
  }

  const checktxn = (hash) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_getTransactionReceipt",
        params: [hash],
        id: 1,
      }),
    }

    fetch(String(process.env.REACT_APP_SPEEDY_NODE), requestOptions)
      .then((response: any) => response.json())
      .then((data) => {
        let res = data

        if (res.result == null) {
          if (!hashCheck) {
            setHashCheck(true)
            toast.info(hashToastText, {
              autoClose: false,
              toastId: "hashToast",
            })
          }
          setTimeout(function () {
            checktxn(hash)
            console.log("Verifying Approval transaction hash...")
          }, 5000)
        } else {
          toast.dismiss("hashToast")
          setHashCheck(false)
          setConfirmOption("Invest")
          toast.success("Transaction verified!")
          invest()
        }
      })
  }

  const approve = () => {
    runApproveContract({
      onSuccess: (data: any) => {
        checktxn(data.hash)
        // toast.success("Approved on whitelist!")
      },
      onError: (err) => {
        console.error(err)
        toast.error("Can't Approve Transaction")
      },
    })
  }

  const invest = () => {
    runInvestContract({
      onSuccess: async (data) => {
        console.log(data)
        toast.success("Invested!")
        whitelist?.set("status", "INVESTED")
        whitelist?.set("tokenAmount", tokenAmount)
        whitelist?.set("box", lootbox?.rank)
        await whitelist?.save()
        setState({ ...state, whitelist: null, selectedLootbox: null })
        onConfirm()
      },
      onError: (err: any) => {
        toast.error(
          "Can't invest! " + JSON.parse(JSON.stringify(err)).error.message
        )
      },
    })
  }

  const lootboxStyle = {
    color: lootbox?.color,
    textShadow: `${lootbox?.color} 0 0 25px`,
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onClose={() => onCancel()}
      title="Confirm investment"
    >
      {/* <SelectWallet>
        <img src={state.selectedWallet.image} alt={state.selectedWallet.name} />
        <b>{state.selectedWallet.name}</b>
      </SelectWallet> */}

      <Content>
        <h5 style={lootboxStyle}>Perks</h5>

        <p className="text-center">{lootbox?.perks}</p>

        <img src={lootbox?.imageOpenPath} alt="Epic" />
      </Content>

      <Grid>
        <div className="grid-title text-secondary">Loot Box Rank:</div>
        <div className="grid-info rank" style={lootboxStyle}>
          <b>{lootbox?.rank}</b>
        </div>
        <div className="grid-title">Amount in <a href="https://snowtrace.io/address/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70" target="_blank" rel="noopener noreferrer">$DAI</a>:</div>
        <div className="grid-info">{whitelist?.get("amount")}</div>
        <div className="grid-title">Token Amount:</div>
        <div className="grid-info">{tokenAmount}</div>
        <div className="grid-title text-secondary">Wallet Adress:</div>
        <div className="grid-info text-secondary text-truncate">
          {whitelist?.get("walletAddress")}
        </div>
      </Grid>

      <div className="flex justify-space-between align-items-baseline">
        <button onClick={() => onCancel()} className="close-modal">
          <img src="svg/arrow-back.svg" alt="Back" />
          Private Sale
        </button>
        <SquareButton onClick={checkAllowance}>{confirmOption}</SquareButton>
      </div>
    </Modal>
  )
}

// const SelectWallet = styled.div`
//   position: absolute;
//   right: 0;
//   top: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-size: 0.75rem;
//   padding: 1rem;
//   img {
//     width: 2.75rem;
//   }
// `
const Content = styled.div`
  text-align: center;
  position: relative;
  height: 300px;
  h5 {
    font-size: 1.5rem;
    margin: 0.5rem;
  }
  p {
    width: 50%;
    margin: auto;
  }
  img {
    position: relative;
    bottom: 50px;
    left: 0;
    width: 100%;
    z-index: -1;
    max-height: 100%;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    p {
      width: unset;
    }
    img {
      bottom: 0;
    }
  }
`
const Grid = styled.div`
  display: grid;
  margin: 2rem auto;
  grid-template-areas:
    "t i"
    "d d"
    "t i"
    "t i"
    "t i";

  grid-template-rows: 2rem 1.5rem 1.5rem 1.5rem;
  grid-template-columns: 150px 150px;

  > :nth-child(1),
  > :nth-child(2) {
    border-bottom: ${({ theme }) => `1px solid ${theme.palette.secondary}`};
    margin-bottom: 3px;
  }
`

export default ModalConfirm
