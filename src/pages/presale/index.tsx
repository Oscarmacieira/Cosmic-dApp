import { useEffect, useState } from "react";
import ProgressBar from "../../components/ui/ProgressBar";
import { Container } from "../../layout/Container";
import PageTitle from "../../layout/PageTitle";
import { Spacer } from "../../layout/Spacer";
import { CardTable } from "./components/CardTable";
import { PreSaleLoader } from "./components/PreSaleLoader";
import { TextDescription } from "./components/TextDescription";
import { WarningModal } from "./components/WarningModal";
import { Steps } from "./steps";
import { useMoralis } from "react-moralis";

export const PreSale = () => {
  useEffect(() => {
    document.title = "Pre Sale - Cosmic Exodus";
  });
  const { user } = useMoralis();

  const [isKYC, setIsKYC] = useState(user && user.get("email"));
  const [step, setStep] = useState(0);
  const handleStep = (val: number) => setStep(val);
  const [subStep, setSubStep] = useState(0);
  const handleSubStep = (val: number) => setSubStep(val);

  useEffect(() => {
    setIsKYC(user && user.get("email"));
    if (!user) setStep(0);
  }, [user]);

  return (
    <>
      <WarningModal onConfirm={() => handleStep(1)} isKYC={isKYC} user={user} />
      <Container style={{ gap: 65, display: "flex", flexDirection: "column" }}>
        <PageTitle>Cosmic Pre Sale</PageTitle>
        {step === 0 && (
          <>
            <p className="text-center blue">
              <b>Contract Address: </b>{" "}
              {process.env.REACT_APP_PUBLIC_IGO_ADDRESS}
            </p>
            <PreSaleLoader />
            <CardTable
              isKYC={isKYC}
              goToStep2={() => {
                handleStep(1);
                handleSubStep(1);
              }}
            />
            <TextDescription />
          </>
        )}
        {step >= 1 && (
          <Steps
            subStep={subStep}
            isKYC={isKYC}
            returnToMainPage={() => handleStep(0)}
          />
        )}
      </Container>
      <Spacer />
    </>
  );
};
