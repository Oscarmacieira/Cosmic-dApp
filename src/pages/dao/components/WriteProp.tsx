import { BoxContainerSecondary } from "../../../components/ui/BoxContainer";
import styled from "styled-components";

export const WriteProp = (props: any) => {
  return (
    <>
      <BoxContainerSecondary>
        <WritePropContainer>
          {" "}
          <input autoFocus={true} placeholder="Question here..." />
          <textarea placeholder="What is your proposal? What are the ins and out? Describe the choices and their outcomes. Be as explicit as you can!" />
        </WritePropContainer>
      </BoxContainerSecondary>
    </>
  );
};

const WritePropContainer = styled.div`
  input {
    margin-bottom: 20px;
    width: 100%;
    outline: none;
    font-size: 22px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.palette.color4};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.contrast};
    ::placeholder {
      color: ${({ theme }) => theme.palette.contrast};
    }
  }

  textarea {
    background-color: ${({ theme }) => theme.palette.color5};
    padding: 10px;
    border-radius: 7px;
    color: ${({ theme }) => theme.palette.contrast};
    resize: none;
    width: 100%;
    height: 240px;
    outline: none;
    border: none;
    ::placeholder {
      color: ${({ theme }) => theme.palette.contrast};
    }
  }
`;
