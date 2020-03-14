import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_CAMP } from '../actions/camp_actions'

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_REVIEW:
      const { review } = action;
      return Object.assign({}, state, { [review.id]: review });
    case RECEIVE_CAMP:
      return Object.assign({}, state, action.reviews);
    case REMOVE_REVIEW: 
      let nextState = Object.assign({}, state);
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
};

export default reviewsReducer;
