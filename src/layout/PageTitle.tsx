import styled from "styled-components";

const Title = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.light};
  text-align: center;
  h1 {
    font-size: 3.5rem;
  }
  .planet-background {
    position: absolute;
    top: -15%;
    right: 0;
    z-index: -1;
    width: 160px;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    .planet-background {
      display: none;
    }
  }
`;

const PageTitle = ({ children }) => {
  return (
    <Title>
      <h1>{children}</h1>
      <img className="planet-background" src="svg/planet.svg" alt="Planet" />
    </Title>
  );
};

export default PageTitle;
