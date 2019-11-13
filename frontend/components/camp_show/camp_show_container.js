import { connect } from 'react-redux';

import { fetchCamp } from '../../actions/camp_actions';
import { fetchUser } from '../../actions/session_actions';
import CampShow from './camp_show';
import { openModal, closeModal } from '../../actions/modal_actions';
import { deleteReview, fetchReview  } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  camp: state.entities.camps[ownProps.match.params.campId],
  users: state.entities.users,
  reviews: state.entities.reviews,
});

const mapDispatchToProps = dispatch => ({
  fetchCamp: (campId) => dispatch(fetchCamp(campId)),
  fetchUser: (id) => dispatch(fetchUser(id)),
  openModal: modal => dispatch(openModal(modal)),
  fetchReview: id => dispatch(fetchReview(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampShow);