import { connect } from "react-redux";
import ReviewItem from "./review_item";
import { openModal, closeModal } from '../../actions/modal_actions';
import { deleteReview, fetchReview } from '../../actions/review_actions';

const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.entities.reviews),
    currentUserId: state.session.id,
    // currentUser: state.entities.users[state.session.id]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal, data) => dispatch(openModal(modal, data)),
    deleteReview: id => dispatch(deleteReview(id)),
    fetchReview: id => dispatch(fetchReview(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem);