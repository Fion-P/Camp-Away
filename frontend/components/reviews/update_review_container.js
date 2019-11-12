import { connect } from 'react-redux';

import { updateReview, fetchReview } from '../../actions/review_actions';
import EditReview from './update_review';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const reviewId = state.ui.modal.data;
  return {
    currentUser: state.entities.users[state.session.id],
    review: state.entities.reviews[reviewId]
  };
};

const mapDispatchToProps = dispatch => ({
  updateReview: review => dispatch(updateReview(review)),
  openModal: modal => dispatch(openModal(modal)),
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)), 
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReview);
