import { RECEIVE_CAMPS, RECEIVE_CAMP } from "../actions/camp_actions"

const campsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPS:
      let nextState = {};
      for (let i = 0; i < action.camps.length; i++ ) {
        nextState[action.camps[i].id] = action.camps[i];
      }
      return nextState;
    case RECEIVE_CAMP:
      const newCamp = { [action.camp.id]: action.camp };
      return Object.assign({}, state, newCamp);
    default:
      return state;
  }
};

export default campsReducer;