import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: calc(100vh - 219.3333px);

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
