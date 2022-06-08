import { useState } from "react";
import { SquareButton } from "../../../components/buttons/squareButton";
import styled from "styled-components";
import { useEffect } from "react";
import { useMoralis, useNewMoralisObject } from "react-moralis";
import { toast, ToastContainer } from "react-toastify";

export const Step1 = ({ goNextStep, user }) => {
  const { save } = useNewMoralisObject("_User");
  const [step, setStep] = useState(0);
  const handleStep = (val: any) => setStep(val);
  const [email, setEmail] = useState(
    user.get("email") ? user.get("email") : null
  );

  useEffect(() => {
    if (email) goNextStep();
  }, []);

  const saveEmail = () => {
    user.set("email", email);
    user
      .save()
      .then(() => {
        toast.success("Email correctly verified!");
        goNextStep();
      })
      .catch((err) =>
        toast.error(
          "Something went wrong while submitting your email, make sure it is correctly formatted"
        )
      );
  };

  return (
    <>
      {step === 0 ? (
        <>
          <p className="text-center" style={{ fontSize: "1.4rem" }}>
            Verify your wallet!
          </p>
          <img alt="wallet" src="svg/wallet.svg" style={{ width: "80px" }} />
          <br />
          <SquareButton
            onClick={() => handleStep(1)}
            style={{ width: "fit-content" }}
          >
            Verify
          </SquareButton>
        </>
      ) : (
        <>
          <p className="text-center" style={{ fontSize: "1.4rem" }}>
            Individual KYC Verification
          </p>

          <p className="text-center">
            Each account has 1 KYC credit.
            <br /> If your verification fails, please contact an admin for more
            information before submitting again.
          </p>
          <br />
          <Input
            placeholder="my@email.com"
            onInput={(e: any) => setEmail(e.target.value)}
          />
          <br />
          <SquareButton onClick={() => saveEmail()} style={{ width: "150px" }}>
            Save Email
          </SquareButton>
        </>
      )}
    </>
  );
};

const Input = styled.input`
  width: 200px;
  padding: 5px 15px;
  outline: none;
  background: ${({ theme }) => theme.palette.shy};
  color: ${({ theme }) => theme.palette.contrast};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.shy};
  ::placeholder {
    color: ${({ theme }) => theme.palette.contrast};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.secondary};
  }
`;
