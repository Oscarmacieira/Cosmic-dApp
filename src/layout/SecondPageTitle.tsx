import styled from "styled-components";

const Title = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.light};
  text-align: center;
  h1 {
    font-size: 4rem;
    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }
  .planet-background {
    position: absolute;
    top: -15%;
    right: 0;
    z-index: -1;
    width: 160px;
  }
  .second-text {
    position: relative;
    color: ${({ theme }) => theme.palette.primary};
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

const SecondPageTitle = (props: any) => {
  return (
    <Title>
      <h1>{props.title}</h1>
      <div className="second-text">{props.children}</div>
      <img className="planet-background" src="svg/planet.svg" alt="Planet" />
    </Title>
  );
};

export default SecondPageTitle;
