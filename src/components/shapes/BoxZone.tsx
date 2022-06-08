import styled from "styled-components";

export const BoxZone = styled.div`
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
  height: 170px;
  left: 0px;
  top: 0px;
  padding-left: 15px;
  padding-right: 15px;

  color: ${({ theme }) => theme.palette.contrast};

  border: 1px solid ${({ theme }) => theme.palette.shy};
  box-sizing: border-box;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.39);
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.color2};
  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
  p {
    width: fit-content;
    height: 0px;
    font-weight: 700;
    font-size: 20px;
    @media (max-width: 768px) {
      margin-top: 5px;
    }
  }

  span {
    color: ${({ theme }) => theme.palette.primary};
  }

  .nb-button-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 100px;
    @media (max-width: 768px) {
      display: block;
    }
  }

  .number {
    position: relative;
    height: 5px;
    font-weight: 700;
    font-size: 64px;
    color: ${({ theme }) => theme.palette.shy};
    @media (max-width: 768px) {
      bottom: 6px;
      height: 20px;
      margin-top: 25px;
    }
  }
`;
