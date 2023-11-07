"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import StepOneForm from '@/app/components/UI/Components/signup/StepOneForm';
import StepTwoForm from '@/app/components/UI/Components/signup/StepTwoForm';

export default function SignUp() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <StepOneForm nextStep={nextStep} />}
      {step === 2 && <StepTwoForm prevStep={prevStep} />}
    </div>
  );
}
