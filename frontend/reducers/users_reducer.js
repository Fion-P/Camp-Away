import { RECEIVE_CURRENT_USER, FETCH_USER } from '../actions/session_actions';
import { RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case FETCH_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case REMOVE_BOOKING:
      const {bookingId, user_id} = action;
      let thisState = Object.assign({}, state)
      let ids = thisState[user_id].bookingIds;
      if (!ids) return null;
      let idx = thisState[user_id].bookingIds.indexOf(bookingId);
      thisState[user_id].bookingIds.splice(idx, 1);
      return thisState;
    case RECEIVE_BOOKING:
      const { booking } = action;
      let newState = Object.assign({}, state);
      newState[booking.user_id].bookingIds.push(booking.id);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;