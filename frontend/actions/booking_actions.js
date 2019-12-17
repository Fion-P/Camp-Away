import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

const receiveBooking = ( {booking, camp} ) => {
  return {
    type: RECEIVE_BOOKING,
    booking,
    camp
  }; 
};

const removeBooking =({id, user_id, camp_id})=> {
  return {
    type: REMOVE_BOOKING,
    bookingId: id,
    user_id
  }
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

export const createBooking = booking => dispatch => {
  // debugger;
  return BookingAPIUtil.createBooking(booking)
    .then(booking => 
      (dispatch(receiveBooking(booking))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const fetchBooking = bookingId => dispatch => (
  BookingAPIUtil.fetchBooking(bookingId)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const updateBooking = booking => dispatch => (
  BookingAPIUtil.updateBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
);

export const deleteBooking = bookingId => dispatch => (
  BookingAPIUtil.deleteBooking(bookingId)
    .then((booking) => dispatch(removeBooking(booking)))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);