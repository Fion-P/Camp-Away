import { connect } from 'react-redux';
import Message from './message';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(Message);