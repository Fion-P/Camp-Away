import { connect } from "react-redux";
import Profile from './profile';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchBooking, updateBooking, deleteBooking } from '../../actions/booking_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    bookings: Object.values(state.entities.bookings),
    currentUserId: state.session.id,
    user: state.entities.users[ownProps.match.params.userId]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    fetchBooking: id => dispatch(fetchBooking(id)),
    deleteBooking: id => dispatch(deleteBooking(id)),
    updateBooking: booking => dispatch(updateBooking(booking)),
    fetchUser: id => dispatch(fetchUser(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);