import { connect } from 'react-redux';

import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
