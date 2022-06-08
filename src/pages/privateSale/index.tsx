import { Container } from "../../layout/Container"
import PageTitle from "../../layout/PageTitle"
import LootBoxRank from "./LootBoxRank"
import { initialValue, Context } from "./context"
import ProgressBar from "./TokenAllocationProgress"
import WhitelistForm from "./WhitelistForm"
import { useMemo, useState } from "react"

const PrivateSale = () => {

  const [state, setState] = useState(initialValue);
  const value = useMemo(() => ({ state, setState }), [state])

  return (
    <Context.Provider value={value}>
      <Container>
        <PageTitle>Private Sale</PageTitle>
        <p className="text-secondary truncate-text">
          <span>Need assistance? </span>
          Check our <b className="mr-2"><a href="cosmic_private_tutorial.pdf"> Step-by-Step Guide</a></b>
        </p>
        <WhitelistForm />
        <ProgressBar />
        <LootBoxRank />
        <div style={{ textAlign: "justify" }}>
          <p style={{ textAlign: "center" }}>
            You can view the repository for our smart contracts here: <a href="https://github.com/Everywhere-Gaming-Studios/private_sale" target="_blank" rel="noopener noreferrer">https://github.com/Everywhere-Gaming-Studios/private_sale</a>
          </p>
          <br/>
          <p>
            This seed funding round will be attended mostly{" "}
            <b>by team members and old partners</b> from previous projects.
          </p>
          <p>
            It's an event <b>by invitation only</b> and given as a reward to
            those who made this project possible. If a "non team member" is
            shown to be of interest for the project success an exception might
            be arranged.
          </p>
          <p>
            There is a <b>limit cap</b> for participation, in order to keep
            decentralization of the token.
          </p>
          <p>
            The tokens exchanged here will only be able to trade directly with
            the Cosmic DAO Fund.
          </p>
          <p>
            Tokens that have not been used in the private sale may be used for
            OTC exchange, if a valued partner is found.
          </p>
        </div>
      </Container>
    </Context.Provider>
  )
}

export default PrivateSale
