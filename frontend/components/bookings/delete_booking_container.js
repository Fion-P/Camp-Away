import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { deleteBooking } from '../../actions/booking_actions';
import DeleteBooking from './delete_booking';

const mapStateToProps = (state, ownProps) => {
  const bookingId = state.ui.modal.data;
  return {
    currentUser: state.entities.users[state.session.id],
    bookingId: bookingId
  };
};

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(deleteBooking(id)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteBooking);
