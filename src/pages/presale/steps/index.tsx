import { useState } from "react";
import { Card } from "../../../components/shapes/Card";
import { HeaderStep } from "./components/HeaderStep";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

import styled from "styled-components";
import { Step3 } from "./Step3";

import { useMoralis } from "react-moralis";


export const Steps = ({ returnToMainPage, isKYC, subStep }) => {

  const {user} = useMoralis(); 
  const [step, setStep] = useState(subStep);

  const [amount, setAmount] = useState(250);
  const [asset, setAsset] = useState("");


  const handleStep = (val: number) => setStep(val);
  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  return (
    <>
      <HeaderStep currentStep={step} />
      <StepCard>
        {step === 0 && <Step1 goNextStep={nextStep} user={user} />}
        {step === 1 && (
          <Step2 goNextStep={nextStep} goPreviousStep={()=> returnToMainPage()} asset={asset} setAsset={setAsset} amount={amount} setAmount={setAmount}/>
        )}
        {step === 2 && (
          <Step3
            goNextStep={() => returnToMainPage()}
            goPreviousStep={previousStep}
            amount={amount}
            asset={asset}
            user = {user}
          />
        )}
      </StepCard>
    </>
  );
};

const StepCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
