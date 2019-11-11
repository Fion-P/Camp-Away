import { CLEAR_ERRORS, RECEIVE_BOOKING, RECEIVE_BOOKING_ERRORS} from '../actions/booking_actions';

const bookingErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_BOOKING:
      return [];
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default bookingErrorsReducer;