import { Step1, Step2, Step3, Step4 } from '@components/index';
import { Action, FormState, State, StoreContextType } from '@lib/types';
import { ReactNode, createContext, useMemo, useReducer } from 'react';

const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

const initialState: State = {
  current: 0,
  modalState: {
    created: false,
    summary: false,
    result: false,
  },
  formData: {
    name: '',
    email: '',
    day: new Date(),
    startTime: new Date(),
    endTime: new Date(new Date().getTime() + 60 * 60 * 1000),
    gName: '',
    gEmail: '',
    type: '',
    desc: '',
  },
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'OPEN_CREATED_MODAL':
      return { ...state, modalState: { ...state.modalState, created: true } };
    case 'CLOSE_CREATED_MODAL':
      return { ...state, modalState: { ...state.modalState, created: false } };
    case 'OPEN_SUMMARY_MODAL':
      return {
        ...state,
        modalState: { ...state.modalState, summary: true, created: false },
      };
    case 'CLOSE_SUMMARY_MODAL':
      return { ...state, modalState: { ...state.modalState, summary: false } };
    case 'OPEN_RESULT_MODAL':
      return {
        ...state,
        modalState: { ...state.modalState, result: true, summary: false },
      };
    case 'CLOSE_RESULT_MODAL':
      return { ...state, modalState: { ...state.modalState, result: false } };
    case 'PREV_STEP':
      return { ...state, current: state.current - 1 };
    case 'NEXT_STEP':
      return { ...state, current: state.current + 1 };
    case 'SAVE_DATA':
      localStorage.setItem('values', JSON.stringify(action.payload));
      return { ...state, formData: action.payload };
    case 'RETRIEVE_DATA':
      return { ...state, formData: action.payload };
    case 'EDIT_FORM':
      return {
        ...state,
        current: 0,
        modalState: { ...state.modalState, summary: false },
      };
    default:
      return state;
  }
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isFirstStep = state.current === 0;
  const isLastStep = state.current === steps.length - 1;
  const currentStep = steps[state.current];

  const saveData = (data: FormState) => {
    dispatch({ type: 'SAVE_DATA', payload: data });
  };
  const edit = () => {
    dispatch({ type: 'EDIT_FORM' });
  };

  const value = useMemo(() => {
    const stepState = { isFirstStep, isLastStep, currentStep };
    const modalHandlers = {
      openCreatedModal: () => dispatch({ type: 'OPEN_CREATED_MODAL' }),
      closeCreatedModal: () => dispatch({ type: 'CLOSE_CREATED_MODAL' }),
      openSummaryModal: () => dispatch({ type: 'OPEN_SUMMARY_MODAL' }),
      closeSummaryModal: () => dispatch({ type: 'CLOSE_SUMMARY_MODAL' }),
      openResultModal: () => dispatch({ type: 'OPEN_RESULT_MODAL' }),
      closeResultModal: () => dispatch({ type: 'CLOSE_RESULT_MODAL' }),
    };
    const prev = () => {
      if (!isFirstStep) {
        dispatch({ type: 'PREV_STEP' });
      }
    };

    const next = () => {
      if (!isLastStep) {
        dispatch({ type: 'NEXT_STEP' });
      }
    };
    const stepHandlers = { prev, next };
    return {
      state,
      modalHandlers,
      stepState,
      stepHandlers,
      saveData,
      edit,
    };
  }, [currentStep, isFirstStep, isLastStep, state]);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
