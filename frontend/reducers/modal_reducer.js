import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const initialState = {
  modal: ""
};

export default function modalReducer(state = initialState, action) {

  Object.freeze(state);
  let nextState = state;

  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, { modal: action.modal, data: action.data })
    case CLOSE_MODAL:
      nextState = "";
      return nextState;
    default:
      return state;
  }
}