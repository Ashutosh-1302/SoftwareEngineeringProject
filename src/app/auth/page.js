"use client";
import { useState } from "react";
import StepOneForm from "@/app/components/UI/Components/signup/StepOneForm";
import StepTwoForm from "@/app/components/UI/Components/signup/StepTwoForm";
import LoginForm from "../components/UI/Components/login/Login";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [login, setLogin] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {!login && (
        <>
          {step === 1 && (
            <StepOneForm
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              login={login}
              setLogin={setLogin}
            />
          )}
          {step === 2 && (
            <StepTwoForm
              formData={formData}
              setFormData={setFormData}
              prevStep={prevStep}
              login={login}
              setLogin={setLogin}
            />
          )}
        </>
      )}

      {!!login && (
        <>
          <LoginForm login={login} setLogin={setLogin} />
        </>
      )}
    </div>
  );
}
