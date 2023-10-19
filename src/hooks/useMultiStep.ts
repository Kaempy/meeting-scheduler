import { ReactElement, useState } from 'react';

const useMultiStep = (steps: ReactElement[]) => {
  const [current, setCurrent] = useState(0);
  const isFirstStep = current === 0;
  const isLastStep = current === steps.length - 1;
  const currentStep = steps[current];

  const prev = () => {
    if (!isFirstStep) {
      setCurrent((prev) => prev - 1);
    }
  };

  const next = () => {
    if (!isLastStep) {
      setCurrent((prev) => prev + 1);
    }
  };
  return {
    steps,
    isFirstStep,
    isLastStep,
    currentStep,
    next,
    prev,
  };
};

export default useMultiStep;
