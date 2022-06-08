import { useMoralisQuery } from "react-moralis"
import styled from "styled-components"
import ProgressBar from "../../components/ui/ProgressBar"

const MAX_AMOUNT = 2500000

const TokenAllocationProgress = () => {
  const { data } = useMoralisQuery("Whitelist", (query) =>
    query.equalTo("status", "INVESTED")
  )
  const totalInvestedToken = data?.reduce((ac, x) => ac + x.attributes.tokenAmount, 0) || 0
  const totalInvestedAmount = data?.reduce((ac, x) => ac + x.attributes.amount, 0) || 0
  const moneyFormatter = new Intl.NumberFormat()

  
  return (
    <TokenAllocationProgressWrapper>
      <h3>
        <b>Token Allocation:</b> {moneyFormatter.format(MAX_AMOUNT)}
        <img src="svg/planet.svg" alt="Planet" />
        <small>
          ({moneyFormatter.format(MAX_AMOUNT - totalInvestedToken)} remaining){" "}
        </small>
      </h3>

      <ProgressBar
        amount={Math.floor((totalInvestedToken / MAX_AMOUNT) * 10000) / 100}
      />
      {/* TODO: Aqui Também não vai entrar o totalInvested, mas sim o total de tokens comprados onde o valor pago por token muda de acordo com o valor que cada pessoa investiu */}

      <p className="funding-value">
        <span>Funding value:</span> {totalInvestedAmount} $
      </p>
      
      <p className="text-secondary truncate-text" style={{color: 'rgb(48, 209, 255)'}}>
        <b className="mr-2">Contract Address:</b>
        <span>{String(process.env.REACT_APP_INVEST_ADDRESS)}</span>
      </p>
    </TokenAllocationProgressWrapper>
  )
}

const TokenAllocationProgressWrapper = styled.div`
  margin-bottom: 5rem;
  h3 {
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1rem;

    img {
      width: 2.5rem;
      vertical-align: middle;
    }
    small {
      opacity: 0.5;
      font-size: 1rem;
      font-weight: bold;
    }
  }
  .funding-value {
    opacity: 0.5;
    font-size: 1rem;
    font-weight: bold;
  }
`
export default TokenAllocationProgress
