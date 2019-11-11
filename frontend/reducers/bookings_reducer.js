import { RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';

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
    default:
      return state; 
  }
};

export default BookingsReducer;