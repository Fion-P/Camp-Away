import { connect } from 'react-redux';
import BookingItem from './booking_item';

import { fetchCamp } from '../../actions/camp_actions';
import { fetchBooking, updateBooking, deleteBooking } from '../../actions/booking_actions';


const mapStateToProps = (state) => {
  return {
    camps: state.entities.camps,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCamp: (campId) => dispatch(fetchCamp(campId)),
  fetchBooking: id => dispatch(fetchBooking(id)),
  deleteBooking: id => dispatch(deleteBooking(id)),
  updateBooking: booking => dispatch(updateBooking(booking)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingItem);