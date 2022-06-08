import styled from "styled-components"
import { Card } from "../../components/shapes/Card"
import { useForm } from "react-hook-form"
import { SquareButton } from "../../components/buttons/squareButton"
import { useWalletAddress } from "../../hooks/useAddress"
import { useMoralis, useNewMoralisObject, useMoralisQuery } from "react-moralis"
import { toast } from "react-toastify"

const MAX_TOKEN_ALLOWED = 25000

const WhitelistForm = () => {
  const { save: saveWhitelist } = useNewMoralisObject("Whitelist")
  const { user } = useMoralis()
  const {
    data: [userWhitelist],
    isFetching,
    fetch,
  } = useMoralisQuery("Whitelist", (query) =>
    query.equalTo("user", user ? user.toPointer() : null)
  )
  const { address } = useWalletAddress()
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      address,
      email: user?.getEmail() || null,
      amount: null,
    },
  })

  if (userWhitelist) {
    setValue("amount", userWhitelist.get("amount").toString())
  }

  const handleForm = async ({ address, email, amount }) => {
    amount = parseInt(amount)
    if (!user || !address || !email || !amount || amount <= 0) return
    if (amount >= MAX_TOKEN_ALLOWED) {
      toast.error(
        `Amount invest can't be equal or grater the max allowed amount of ${MAX_TOKEN_ALLOWED} $!`
      )
      return
    }

    user.setEmail(email)
    toast
      .promise(
        Promise.all([
          user.save(),
          saveWhitelist({
            amount,
            email,
            walletAddress: address,
            user: user.toPointer(),
          }),
        ]),
        {
          success: "Applied to whitelist!",
          error: "Can't apply to whitelist!",
          pending: "Wait a second...",
        }
      )
      .then(() => fetch())
  }

  return (
    <div style={{ marginBottom: "5rem", position: "relative" }}>
      <Card>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <>
            <h3 className="mt-0">KYC Whitelist</h3>
            <form onSubmit={handleSubmit((data) => handleForm(data))}>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  readOnly={!!userWhitelist}
                  {...register("email", { required: true })}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="wallet-address">Wallet Address:</label>
                <input
                  type="text"
                  id="wallet-address"
                  readOnly={!!userWhitelist}
                  {...register("address", { required: true })}
                  placeholder="0X0000000000000000"
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="amount">Amount in <a href="https://snowtrace.io/address/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70" target="_blank" rel="noopener noreferrer">$DAI</a>:</label>
                <input
                  type="number"
                  id="amount"
                  placeholder="0.00"
                  readOnly={!!userWhitelist}
                  {...register("amount", { required: true })}
                />
              </FormGroup>

              {!userWhitelist ? (
                <div className="mt-4 flex justify-flex-end">
                  <SquareButton type="submit">Apply for Whitelist</SquareButton>
                </div>
              ) : null}
            </form>
          </>
        )}
      </Card>

      <PlanetBg src="svg/planet.svg" alt="Planet" />
    </div>
  )
}

const FormGroup = styled.div`
  display: grid;
  grid-gap: 0.25rem 1rem;
  grid-template: "l i";
  grid-template-columns: 1fr 3fr;
  margin-bottom: 1rem;

  label {
    grid-area: l;
    font-weight: bold;
  }

  input {
    grid-area: i;
    background: transparent;
    border: 0;
    border-bottom: ${({ theme }) => `1px solid ${theme.palette.secondary}`};
    color: ${({ theme }) => theme.palette.secondary};
    outline: 0 !important;
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(255, 255, 255, 0.25);
      opacity: 1; /* Firefox */
    }
  }

  @media (max-width: 768px) {
    grid-template: "l" "  i";
  }
`

const PlanetBg = styled.img`
  z-index: -1;
  position: absolute;
  bottom: -150px;
  right: 75%;
  width: 350px;
`

export default WhitelistForm
