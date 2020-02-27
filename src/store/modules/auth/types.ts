export interface User {
  name: string;
  email: string;
}

export interface SignState {
  token: string | undefined;
  signed: boolean;
  loading: boolean;
}

export interface ReducerAction {
  type: string;
  payload?: {
    token?: string | undefined;
    name?: string;
    user?: User;
    email?: string;
    password?: string;
  };
}

export interface SignInSagaAction {
  type: string;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

export interface SignUpSagaAction {
  type: string;
  payload: {
    email: string;
    password: string;
    name: string;
  };
}

export interface PersistSagaAction {
  type: string;
  payload?: {
    auth?: SignState;
  };
}
