import { BoxContainer } from "../../../components/ui/BoxContainer";
import styled from "styled-components";

export const Choices = (props: any) => {
  return (
    <>
      <BoxContainer>
        <ChoiceContainer>
          <h2>Choices</h2>{" "}
          <div className="flex">
            <img style={{ width: "10px" }} alt="info" src="svg/info.svg" />
            <p>Leave the field empty if unused</p>
          </div>{" "}
          <br />
          <input placeholder="Option A" />
          <input placeholder="Option B" />
          <input placeholder="Option C" />
          <input placeholder="Option D" />
        </ChoiceContainer>
      </BoxContainer>
    </>
  );
};

const ChoiceContainer = styled.div`
  h2 {
    margin: 0px;
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

    margin-bottom: 20px;
    width: 100%;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.palette.contrast};
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.palette.color1};
    ::placeholder {
      color: ${({ theme }) => theme.palette.shy};
    }
  }
`;
