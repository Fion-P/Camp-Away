import { RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';
import { FETCH_USER } from '../actions/session_actions';
const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_BOOKING:
      nextState[action.booking.id] = action.booking;
      return nextState;
    case REMOVE_BOOKING: 
      delete nextState[action.bookingId];
      return nextState;
    case FETCH_USER:
      if (action.bookings) return action.bookings;
      return state;
    default:
      return state; 
  }
};

export default BookingsReducer;