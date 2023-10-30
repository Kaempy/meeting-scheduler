import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStore } from '@hooks/useCtx';
import { TSchema, schema } from '@lib/schema';
import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from './FormElement';

const Page = () => {
  const {
    state,
    stepState: {
      currentStep,

      isFirstStep,
      isLastStep,
    },
    stepHandlers: { prev, next },
    modalHandlers,
    saveData,
  } = useStore();
  const methods = useForm<TSchema>({
    mode: 'onTouched',
    defaultValues: state.formData,
    resolver: zodResolver(schema),
  });

  const { control, handleSubmit, formState, reset } = methods;
  const { isDirty, isSubmitting, isValid, isSubmitted } = formState;
  useEffect(() => {
    if (isSubmitted) reset();
  }, [isSubmitted, reset]);
  const onSubmit: SubmitHandler<TSchema> = (formValues) => {
    // if (!isLastStep) {
    //   next();
    //   return;
    // }
    saveData(formValues);
    modalHandlers.openCreatedModal();
  };
  return (
    <main className="px-6 dark:bg-black dark:bg-opacity-80 lg:px-20">
      <div className="flex flex-col items-center justify-between gap-12 py-12 lg:flex-row">
        <div className="m-auto mt-16 lg:mt-auto lg:w-3/5">
          <h1 className="bg-gradient-to-r from-blue-800 to-red-500 bg-clip-text font-baskerville text-4xl font-bold text-transparent sm:text-7xl">
            Lorem ipsum dolor sit
          </h1>
          <p className="mt-3 max-w-xl bg-gradient-to-r from-blue-400 to-sky-800 bg-clip-text font-fira text-sm text-[#edddfe] text-transparent sm:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem
            ipsa, nulla laboriosam dolores, repellendus perferendis libero
            suscipit nam temporibus molestiae
          </p>
        </div>
        <div className="mx-auto lg:w-2/5">
          <div className="flex w-auto items-center rounded-lg border border-sky-500 bg-slate-700 px-6 py-10 shadow dark:bg-[#cbbed89e] lg:h-[600px] lg:py-0 ">
            <div className="shadow-3xl flex-1 rounded-lg bg-fuchsia-100 p-6 shadow-sky-500 dark:bg-gray-900">
              <div className="mx-auto flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary dark:hover:text-[#646cff75] md:h-10 md:w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>

              <div className="mt-8">
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    {currentStep}
                    <div className="mt-6 flex items-center justify-between gap-3">
                      {!isFirstStep && (
                        <Button
                          text="Prev"
                          type="button"
                          onClick={prev}
                          className="w-max transform bg-primary px-4 py-2 font-bricolage tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-50 dark:bg-[#646cff75] dark:hover:bg-primary"
                        />
                      )}
                      <Button
                        text={isLastStep ? 'Done' : 'Next'}
                        type={isLastStep ? 'submit' : 'button'}
                        onClick={next}
                        disabled={
                          isLastStep
                            ? !isDirty || isSubmitting || !isValid
                            : undefined
                        }
                        className="w-max transform bg-primary px-4 py-2 font-bricolage tracking-wide text-white transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-50 disabled:bg-gray-400 disabled:text-gray-950 dark:bg-[#646cff75] dark:hover:bg-primary dark:disabled:bg-gray-400"
                      />
                    </div>
                    <DevTool control={control} />
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
