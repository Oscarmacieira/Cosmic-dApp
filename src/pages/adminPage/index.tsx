import { useEffect, useState } from "react"
import {
  InputGroup,
  Label,
  Entry,
  ButtonGroup,
  Heading,
} from "../../pages/adminPage/entry"
import { Container } from "../../layout/Container"
import { SquareButton } from "../../components/buttons/squareButton"
import { useMoralis, useMoralisQuery, useWeb3Contract } from "react-moralis"
import PageTitle from "../../layout/PageTitle"
import { useWalletAddress } from "../../hooks/useAddress"
import { toast } from "react-toastify"
import invest from "../../abi/Invest.json"
import Moralis from "moralis"

const AdminPage = () => {
  const { isAuthenticated } = useMoralis()
  const { address } = useWalletAddress()
  const [admin, setAdmin] = useState(false)

  // const pipeline = [
  //   {
  //     lookup: {
  //       from: "User",
  //       localField: "objectId",
  //       foreignField: "objectId",
  //       as: "User",
  //     },
  //   },
  // ] .aggregate(pipeline).then((results) => {return results})

  const {
    data,
    fetch,
    isFetching,
    error: fetchingError,
  } = useMoralisQuery("Whitelist", (query) =>
    query.equalTo("status", "PENDING")
  )
  String()
  const { runContractFunction } = useWeb3Contract({})

  useEffect(() => {
    if (
      address ===
      String(process.env.REACT_APP_ADMIN_ADDRESS).toLocaleLowerCase()
    ) {
      setAdmin(true)
    }
  }, [address])

  const setWhitelist = (addresses: string[], callback) => {
    runContractFunction({
      params: {
        abi: invest.abi.filter((x) => x.name === "setWhitelist"),
        contractAddress: String(process.env.REACT_APP_INVEST_ADDRESS),
        functionName: "setWhitelist",
        params: {
          _users: addresses,
        },
      },
      onSuccess: callback,
      onError: (error) => {
        toast.error("Fail at approve whitelist!")
        console.error(error)
      },
    })
  }

  const approveAll = () => {
    setWhitelist(
      data.map((x) => x.attributes.walletAddress),
      () =>
        Promise.all(data.map((entry) => entry.save({ status: "APPROVED" })))
          .then(() => {
            toast.success("Entries is now approved!")
            fetch()
          })
          .catch(() => toast.error("Cannot update entries!"))
    )
  }

  const changeEntryStatus = async (
    entry: Moralis.Object<Moralis.Attributes>,
    status: "APPROVED" | "DENIED"
  ) => {
    entry.set("status", status)

    const updateOnDb = async () => {
      await toast.promise(entry.save(), {
        success: `Entry status is now ${status.toLowerCase()!}`,
        error: "Failed to change entry status!",
        pending: "Wait a second...",
      })
      await fetch()
    }

    if (status === "APPROVED")
      setWhitelist([entry.attributes.walletAddress], updateOnDb)
    else await updateOnDb()
  }

  return (
    <Container>
      <PageTitle>Admin Page&nbsp;</PageTitle>
      {isAuthenticated && admin ? (
        isFetching ? (
          <p>Loading...</p>
        ) : fetchingError ? (
          <p>Fetching Error: {fetchingError}</p>
        ) : (
          <>
            {data.length ? (
              <div className="flex justify-flex-end mt-2">
                <SquareButton onClick={() => approveAll()}>
                  Approve All
                </SquareButton>
              </div>
            ) : null}

            {data.length ? (
              data.map((entry, index) => (
                <Entry key={"entry-" + index}>
                  <Heading className={"left"}>Entry {index + 1}</Heading>
                  <InputGroup>
                    <Label>Email:</Label>
                    <input
                      placeholder="Email"
                      disabled
                      value={entry.attributes.email}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>Wallet Address:</Label>
                    <input
                      placeholder="0X6F2E34FZESFQF60b3"
                      disabled
                      value={entry.attributes.walletAddress}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>Amount in <a href="https://snowtrace.io/address/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70" target="_blank" rel="noopener noreferrer">$DAI</a>:</Label>
                    <input
                      placeholder="0.00"
                      disabled
                      value={entry.attributes.amount}
                    />
                  </InputGroup>
                  <ButtonGroup>
                    <SquareButton
                      onClick={() => changeEntryStatus(entry, "DENIED")}
                      className={"first-button"}
                    >
                      Delete
                    </SquareButton>
                    <SquareButton
                      onClick={() => changeEntryStatus(entry, "APPROVED")}
                    >
                      Approve
                    </SquareButton>
                  </ButtonGroup>
                </Entry>
              ))
            ) : (
              <p>No items to approve!</p>
            )}
          </>
        )
      ) : (
        <>
          <Entry>
            <Heading style={{ alignSelf: "center" }}>
              <b>Only Admins are authorized to view this page</b>
            </Heading>
          </Entry>
        </>
      )}
    </Container>
  )
}

export default AdminPage
