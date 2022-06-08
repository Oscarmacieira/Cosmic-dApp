import { InfoBtn } from "../../../components/buttons/infoBtn/infoBtn";
import { Card } from "../../../components/shapes/Card";
import styled from "styled-components";
import { SquareButtonSm } from "../../../components/buttons/squareButton";
import { addTokenToWallet } from "../utils";
export const CardTable = ({ isKYC, goToStep2 }) => {
  return (
    <>
      <Card>
        <TableStyle>
          <thead>
            <tr>
              <th
                onClick={() =>
                  addTokenToWallet(
                    process.env.REACT_APP_COSMIC_TOKEN_ADDRESS,
                    "COSMICIGO",
                    "18",
                    null
                  )
                }
              >
                <img
                  alt="add-token"
                  style={{ cursor: "pointer" }}
                  src="svg/addMeta.svg"
                />
              </th>
              <th>
                <b className="blue">Rank</b>
              </th>
              <th>
                <b className="shy">Vesting</b>
              </th>
              <th>
                <b className="shy">Price $</b>
              </th>
              <th>
                <b className="shy">Perks</b>
              </th>
              <th>
                <b className="shy">Details</b>
              </th>
              {isKYC && <th></th>}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  alt="lootbox"
                  src="svg/lootboxs/Normal/normal.png"
                  style={{ width: 128 }}
                />
              </td>
              <td>
                <b style={{ color: "#C5FCFF", fontSize: "1.2rem " }}>Normal</b>
              </td>
              <td>
                <p className="shy hidden">Vesting</p>
                <b>3 months</b>
                <br />
                <b>Linear release</b>
              </td>
              <td>
                <p className="shy hidden">Price $</p>

                <b>0.3</b>
              </td>
              <td>
                <p className="shy hidden">Perks</p>
                <p>Profile template</p>
              </td>
              <td>
                <p className="shy hidden">Details</p>
                <p>
                  <InfoBtn />
                </p>
              </td>
              {isKYC && (
                <td>
                  <SquareButtonSm onClick={() => goToStep2()}>
                    Buy
                  </SquareButtonSm>
                </td>
              )}
            </tr>
          </tbody>
        </TableStyle>
        <p>
          Miniminum amount to participate is <b>$250</b>
        </p>
      </Card>
    </>
  );
};

const TableStyle = styled.table`
  text-align: center;
  table-layout: auto;
  width: 100%;
  border-collapse: collapse;

  thead th:nth-child(1) {
    img {
      :hover {
        opacity: 0.7;
      }
    }
  }

  thead {
    th {
      padding-bottom: 10px;
    }
  }
  tbody {
    tr,
    td {
      border-bottom: 1px solid ${({ theme }) => theme.palette.secondary};
      border-top: 1px solid ${({ theme }) => theme.palette.secondary};
    }
  }

  .hidden {
    color: ${({ theme }) => theme.palette.shy};
    font-weight: bold;
    display: none;
    margin: 1;
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    tbody td {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    tbody td p {
      margin: 0px;
    }
    .hidden {
      display: block;
    }
    tbody td:nth-child(2) {
      border-bottom: 1px solid ${({ theme }) => theme.palette.secondary};
    }
    /* Hide table headers (but not display: none;, for accessibility) */
    thead th {
      display: none;
    }
    thead th:nth-child(1) {
      display: flex;
      justify-content: flex-end;
    }

    tr {
    }

    tbody td,
    tbody tr {
      border: 0px;
    }
    td:nth-of-type(2) {
      position: relative;
      top: -20px;
    }

    /*
	Label the data
	*/
    /* td:nth-child(n):before {
      color: ${({ theme }) => theme.palette.shy};
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    td:nth-of-type(1):before {
      content: "";
    }
    td:nth-of-type(2):before {
      content: "Rank";
    }
    td:nth-of-type(3):before {
      content: "Vesting";
    }
    td:nth-of-type(4):before {
      content: "Price $";
    }
    td:nth-of-type(5):before {
      content: "Perks";
    }
    td:nth-of-type(6):before {
      content: "Details";
    }
    td:nth-of-type(7):before {
      content: "";
    } */
  }
`;
