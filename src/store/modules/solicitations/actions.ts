export function createSolicitationRequest() {
  return {
    type: '@solicitation/CREATE_SOLCITATION_REQUEST',
    payload: {},
  };
}

export function createSolicitationSuccess() {
  return {
    type: '@solicitation/CREATE_SOLCITATION_SUCCESS',
    payload: {},
  };
}

export function OpenSolicitationModal() {
  return {
    type: '@solicitation/OpenModal',
  };
}

export function CloseSolicitationModal() {
  return {
    type: '@solicitation/CloseModal',
  };
}
