import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.palette.color2};
  box-shadow: 0px 3px 27px 0px #00000063;
  border-radius: 0.5rem;
`;
