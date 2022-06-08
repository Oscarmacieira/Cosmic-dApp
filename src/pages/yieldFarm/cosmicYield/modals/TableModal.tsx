import { BoxContainer } from "../../../../components/ui/BoxContainer";

export const TableModal = (props: any) => {
  return (
    <>
      <BoxContainer isInfo={true}>
        <table
          style={{
            width: "100%",
            tableLayout: "fixed",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <th className="bl">Period</th>
              <th>{props.stake1 + " - " + props.stake2 + " LP"}</th>
              <th>{"$" + props.earn + " Earned"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1d</td>
              <td>0.00000000</td>
              <td>0.00000000</td>
            </tr>
            <tr>
              <td>1w</td>
              <td>0.00000000</td>
              <td>0.00000000</td>
            </tr>
            <tr>
              <td>1m</td>
              <td>0.00000000</td>
              <td>0.00000000</td>
            </tr>
            <tr>
              <td>3m</td>
              <td>0.00000000</td>
              <td>0.00000000</td>
            </tr>
            <tr>
              <td>6m</td>
              <td>0.00000000</td>
              <td>0.00000000</td>
            </tr>
            <tr>
              <td>1y</td>
              <td>0.00000000</td>
              <td>0.00000000</td>
            </tr>
          </tbody>
        </table>
      </BoxContainer>
    </>
  );
};
