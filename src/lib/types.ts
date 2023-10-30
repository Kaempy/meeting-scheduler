type ModalState = {
  created: boolean;
  summary: boolean;
  result: boolean;
};
type FormState = {
  name: string;
  email: string;
  day: Date;
  startTime: Date;
  endTime: Date;
  gName: string;
  gEmail: string;
  type: string;
  desc: string;
};
type State = {
  current: number;
  modalState: ModalState;
  formData: FormState;
};

type ActionType =
  | 'OPEN_CREATED_MODAL'
  | 'CLOSE_CREATED_MODAL'
  | 'OPEN_SUMMARY_MODAL'
  | 'CLOSE_SUMMARY_MODAL'
  | 'OPEN_RESULT_MODAL'
  | 'CLOSE_RESULT_MODAL'
  | 'PREV_STEP'
  | 'NEXT_STEP'
  | 'SAVE_DATA'
  | 'EDIT'
  | 'RETRIEVE_DATA'
  | 'EDIT_FORM';

type ActionPayload = any;

type Action = {
  type: ActionType;
  payload?: ActionPayload;
};

type StepState = {
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStep: JSX.Element;
};
type StepHandlers = { prev: () => void; next: () => void };
type ModalHandlers = {
  openCreatedModal: () => void;
  closeCreatedModal: () => void;
  openSummaryModal: () => void;
  closeSummaryModal: () => void;
  openResultModal: () => void;
  closeResultModal: () => void;
};

type StoreContextType = {
  state: State;
  stepState: StepState;
  stepHandlers: StepHandlers;
  modalHandlers: ModalHandlers;
  edit: () => void;
  saveData: (data: FormState) => void;
};

export type { Action, FormState, State, StoreContextType };
