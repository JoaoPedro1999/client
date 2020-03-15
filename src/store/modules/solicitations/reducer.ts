import produce from 'immer';

import { SolicitationState, ReducerAction } from './types';

const INITIAL_STATE: SolicitationState = {
  data: [],
  SolicitationModalOpen: false,
};

export default function auth(state = INITIAL_STATE, action: ReducerAction) {
  return produce(state, draft => {
    switch (action.type) {
      case '@solicitation/CREATE_SOLCITATION_REQUEST': {
        break;
      }
      case '@solicitation/CREATE_SOLCITATION_SUCCESS': {
        break;
      }
      case '@solicitation/OpenModal': {
        draft.SolicitationModalOpen = true;
        break;
      }
      case '@solicitation/CloseModal': {
        draft.SolicitationModalOpen = false;
        break;
      }
      default:
    }
  });
}
