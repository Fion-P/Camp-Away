import {connect} from 'react-redux';
import BookingForm from './booking_form';

import {createBooking, clearErrors} from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.bookings
});

const mDTP = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  createBooking: (booking) => dispatch(createBooking(booking)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(BookingForm);