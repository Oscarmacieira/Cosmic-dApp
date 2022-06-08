import { BoxContainer } from "../../../components/ui/BoxContainer";
import styled from "styled-components";
import { SquareButton } from "../../../components/buttons/squareButton";

export const DatesProposition = (props: any) => {
  return (
    <>
      <BoxContainer>
        <DateContainer>
          <h2>Time</h2> <br />
          <h4>Start Date</h4>
          <input type={"date"} />
          <h4>End Date</h4>
          <input type={"date"} />
          <SquareButton>Publish</SquareButton>
        </DateContainer>
      </BoxContainer>
    </>
  );
};

const DateContainer = styled.div`
  h2,
  h4 {
    margin: 0px;
  }

  h4 {
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.palette.secondary};
  }
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.palette.shy};
    margin: 0px;
    margin-left: 5px;
  }
  input {
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;

    margin-bottom: 20px;
    width: 100%;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.palette.shy};
    border-radius: 15px;
    border: none;

    color: ${({ theme }) => theme.palette.contrast};
    ::placeholder {
      color: ${({ theme }) => theme.palette.shy};
    }
  }
`;
