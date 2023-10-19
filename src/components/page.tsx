import { FormEvent, useState } from 'react';
import { Step1, Step2, Step3, Step4 } from '.';
import useMultiStep from '../hooks/useMultiStep';
import Portal from '../shared/Portal';
import { Button } from './FormElement';
import SuccessModal from './SuccessModal';

const Page = () => {
  const step = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];
  const { isFirstStep, isLastStep, currentStep, next, prev } =
    useMultiStep(step);

  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    openModal();
  };
  return (
    <main className="px-6 dark:bg-black dark:bg-opacity-80 lg:px-20">
      {open ? (
        <Portal onClose={closeModal}>
          <SuccessModal onClose={closeModal} />
        </Portal>
      ) : null}
      <div className="flex flex-col items-center justify-between gap-12 py-12 lg:flex-row">
        <div className="m-auto mt-16 lg:mt-auto lg:w-3/5">
          <h1 className="bg-gradient-to-r from-blue-800 to-red-500 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl">
            Lorem ipsum dolor sit
          </h1>

          <p className="mt-3 max-w-xl bg-gradient-to-r from-blue-400 to-sky-800 bg-clip-text text-sm text-[#edddfe] text-transparent sm:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem
            ipsa, nulla laboriosam dolores, repellendus perferendis libero
            suscipit nam temporibus molestiae
          </p>
        </div>
        <div className="mx-auto lg:w-2/5">
          <div className="flex w-auto items-center rounded-lg border border-sky-500 bg-slate-700 px-6 py-12 shadow dark:bg-[#cbbed89e] lg:h-[600px] lg:py-0 ">
            <div className="shadow-3xl flex-1 rounded-lg bg-fuchsia-100 p-6 shadow-sky-500 dark:bg-gray-900">
              <div className="mx-auto flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary h-8 w-8 dark:hover:text-[#646cff75] md:h-10 md:w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>

              <div className="mt-8">
                <form onSubmit={submitHandler}>
                  {currentStep}
                  <div className="mt-6 flex items-center justify-between gap-3">
                    {!isFirstStep && (
                      <Button
                        text="Prev"
                        type="button"
                        onClick={prev}
                        className="bg-primary dark:hover:bg-primary w-max transform px-4 py-2 tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-[#646cff75]"
                      />
                    )}
                    <Button
                      text={isLastStep ? 'Done' : 'Next'}
                      type="submit"
                      className="bg-primary dark:hover:bg-primary w-max transform px-4 py-2 tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-[#646cff75]"
                    />
                  </div>
                </form>

                <p className="mt-6 text-center text-sm text-gray-400">
                  Don&#x27;t have an account yet?
                  <a
                    href="/"
                    className="text-blue-500 hover:underline focus:underline focus:outline-none"
                  >
                    &nbsp;Sign up
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
