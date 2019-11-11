import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
});

const removeBooking = bookigId => ({
  type: REMOVE_BOOKING,
  bookigId
});

export const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const createBooking = booking => dispatch => (
  BookingAPIUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)))
);

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
    .then(() => dispatch(removeBooking(bookingId)))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);