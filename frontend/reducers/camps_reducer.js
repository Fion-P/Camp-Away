import { RECEIVE_CAMPS, RECEIVE_CAMP } from "../actions/camp_actions"

const campsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPS:
      return action.camps;
    case RECEIVE_CAMP:
      const newCamp = { [action.camp.id]: action.camp };
      return Object.assign({}, state, newCamp);
    default:
      return state;
  }
};

export default campsReducer;