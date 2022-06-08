import styled from "styled-components";

export const DAOProposal = styled.div`
  width: 100%;
  height: 60vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.color5};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.shy};
    width: 20px;
  }
  .proposition-card {
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.shy};

    h2 {
      height: 20px;
      @media (max-width: 768px) {
        height: 70px;
      }
    }
    .open,
    .icons-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      @media (max-width: 992px) {
        display: block;
      }

      .icon-info {
        font-style: normal;
        font-weight: 100;
      }
    }
  }
`;

export const ScrollText = styled.div`
  height: 55%;
  overflow-y: scroll;
  padding-right: 20px;
  padding-top: 0px;
  @media (max-width: 768px) {
    height: 300px;
  }

  p {
    margin-top: 0px;
  }
`;

export const Open = styled.div`
  width: 59px;
  height: 28px;
  border-radius: 5px;
  text-align: center;
  font-weight: 700;
  background: #3f9e1e;
  font-size: 16px;
`;

export const Close = styled(Open)`
  background: #a3a9f6;
  color: #0c112a;
`;

export const Grid = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-row-gap: 0px;
  grid-template-rows: 4;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    display: block;
  }

  .one {
    grid-area: 1 / 1 / 2 / 2;
  }

  .two {
    grid-area: 1 / 2 / 2 / 3;
  }
  .three {
    grid-area: 2 / 1 / 3 / 2;
  }
  .four {
    grid-area: 3 / 1 / 3 / 2;
  }
  .five {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

export const Grid3 = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 23px;
  @media (max-width: 768px) {
    display: block;
  }
`;
