import { BoxContainerAuto } from "../../../components/ui/BoxContainer";
import styled from "styled-components";
import { getShortWallet } from "../../../utils/shortWallet";

export const Top10Votes = (props: any) => {
  return (
    <>
      <BoxContainerAuto>
        <h2>{props.title}</h2>
        <hr />
        <TOP10Container>
          <table id="top10">
            <thead>
              <tr id="top">
                <th>
                  <img alt="address" src="svg/by.svg" />
                  <br />
                  <b>Address</b>
                </th>
                <th>
                  <img alt="vote" src="svg/vote.svg" />
                  <br />
                  <b>Vote</b>
                </th>
                <th>
                  <img alt="voting-power" src="svg/voting-power.svg" />
                  <br />
                  <b>V.Power</b>
                </th>
              </tr>
            </thead>

            <tbody>
              {props.options?.map((info, index) => {
                return (
                  <tr key={Math.random()}>
                    <td key={Math.random()}>{getShortWallet(info.address)}</td>
                    <td key={Math.random()}>
                      <div key={Math.random()} className="choice">
                        {info.vote}
                      </div>
                    </td>
                    <td key={Math.random()}>{info.power}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TOP10Container>
      </BoxContainerAuto>
    </>
  );
};

const TOP10Container = styled.div`
  #top10 {
    text-align: center;
    justify-content: center;
    width: 100%;
    table-layout: auto;
    td {
      border-right: 0px;
    }
    th {
      border-right: 0px;
      border-bottom: 1px dashed ${({ theme }) => theme.palette.shy};
      margin-bottom: 10px;
    }

    th:nth-child(3) {
      width: 30px;
    }

    .choice {
      width: 90%;
      margin-left: auto;
      margin-right: auto;

      background-color: ${({ theme }) => theme.palette.contrast};
      color: ${({ theme }) => theme.palette.color1};
      border-radius: 20px;
      padding: 5px;
      font-weight: 700;
    }
  }
`;
