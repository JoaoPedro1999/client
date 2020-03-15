export interface SolicitationState {
  data: Array<string>;
  SolicitationModalOpen: boolean;
}

export interface ReducerAction {
  type: string;
  payload?: {
    token?: string | undefined;
    name?: string;
    email?: string;
    password?: string;
  };
}

export interface CreateSolicitationSagaAction {
  type: string;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}
