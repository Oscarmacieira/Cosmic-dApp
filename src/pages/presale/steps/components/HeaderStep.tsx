import styled from "styled-components";
import { Card } from "../../../../components/shapes/Card";

export const HeaderStep = ({ currentStep }) => {
  return (
    <HeaderStepStyle>
      <HeaderZone
        currentStep={currentStep}
        stepNb={0}
        description="KYC verification"
      />
      <ArrowNext />
      <HeaderZone
        currentStep={currentStep}
        stepNb={1}
        description="Select payment option"
      />{" "}
      <ArrowNext />
      <HeaderZone
        currentStep={currentStep}
        stepNb={2}
        description="Smart Contract verification"
      />
    </HeaderStepStyle>
  );
};

const HeaderStepStyle = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeaderZone = ({ stepNb, description, currentStep = 1 }) => {
  return (
    <HeaderZoneStyle
      style={{ boxShadow: currentStep === stepNb ? "0px 0px 8px #30D1FF" : "" }}
    >
      <h1>Step {stepNb + 1}</h1>
      <p>{description}</p>
    </HeaderZoneStyle>
  );
};

const HeaderZoneStyle = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    margin: 4px;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const ArrowNext = () => {
  return (
    <Arrow>
      <img alt="next" src="svg/arrow-down.svg" />
    </Arrow>
  );
};

const Arrow = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  padding: 10px;
  background: ${({ theme }) => theme.palette.color2};
  box-shadow: 0px 0px 5px 5px #00000041;
  width: fit-content;
  height: fit-content;
  display: flex;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  img {
    width: 25px;
    height: 25px;
    transform: rotate(-90deg);
    @media (max-width: 768px) {
      width: 10px;
      height: 10px;
    }
  }
  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;
