import styled from "styled-components";
import { SquareButtonSm } from "../buttons/squareButton";

const DisplayStar = (props: any) => {
  return (
    <>
      <img
        style={{ marginTop: "3px", padding: "2px", width: "15px" }}
        alt={"star"}
        src={`svg/yellow-star.svg`}
      />
    </>
  );
};

export const ListCard = (props: any) => {
  const stars: JSX.Element[] = [];
  for (let i = 1; i <= props.nbStar; i++) {
    stars.push(<DisplayStar key={i} />);
  }
  return (
    <>
      <CardInfo>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              {props.isButton && <th></th>}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="iconbox">
                {props.stake1 !== "" && (
                  <img
                    alt="ticker1"
                    className="ticker1"
                    src={"svg/coins/" + props.stake1Svg + ".svg"}
                  />
                )}
                {props.stake2 !== "" && (
                  <img
                    className="ticker2"
                    alt="ticker2"
                    src={"svg/coins/" + props.stake2Svg + ".svg"}
                  />
                )}
              </td>
              <td className="big">
                <p className="shy">Stake:</p>
                <p>
                  {props.stake1 === ""
                    ? `$${props.stake2}`
                    : `${props.stake1} - ${props.stake2} LP`}
                </p>
              </td>
              <td>
                <p className="shy">Earn:</p>
                <p> ${props.earn}</p>
              </td>
              <td>
                <p className="shy">Multiplier:</p>
                <p>{stars}</p>
              </td>
              <td>
                <p className="shy">Liquidity:</p>
                <p>${props.liquidity}</p>
              </td>
              <td>
                <p className="blue">Wallet:</p>
                <p>{props.wallet}</p>
              </td>
              <td>
                <p className="blue">Balance:</p>
                <p>${props.balance}</p>
              </td>
              {props.isButton && (
                <td className="button-cell">
                  <SquareButtonSm
                    onClick={() => {
                      props.onClick();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    View
                  </SquareButtonSm>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </CardInfo>
      {props.isChildren && <LinkZone>{props.children}</LinkZone>}
    </>
  );
};

const LinkZone = styled.div`
  height: 35px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.light};

  @media (max-width: 768px) {
    height: 5px;
    width: 100%;
    border: none;
  }
  span {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

const CardInfo = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 5px;
  height: fit-content;

  @media (max-width: 768px) {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.39);
    height: fit-content;
    flex-direction: column;
    padding: 40px;
    background-color: ${({ theme }) => theme.palette.color2};
    border-radius: 20px;
    border-bottom: none;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  table {
    width: 100%;
    table-layout: fixed;
    img {
      width: 40px;

      @media (max-width: 1200px) {
        width: 30px;
      }
      @media (max-width: 768px) {
        width: 60px;
      }
    }
    .blue {
      color: ${({ theme }) => theme.palette.secondary};
    }
    .shy {
      color: ${({ theme }) => theme.palette.shy};
    }

    .iconbox {
      @media (max-width: 768px) {
        display: block;
        margin-bottom: 15px;
        text-align: center;
      }
    }

    td {
      font-weight: 700;

      font-size: 15px;

      @media (max-width: 768px) {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
      }
    }

    th:nth-child(8) {
      width: 100px;
      @media (max-width: 1200px) {
        width: 70px;
      }
    }

    th {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .ticker1 {
    position: relative;
    z-index: 1;
  }
  .ticker2 {
    position: relative;
    left: -15px;
    z-index: 0;
  }
`;
