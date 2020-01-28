import React from 'react';
import Signup from './signup';
import { signup, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
  // currentUser: state.entities.users[state.session.id],
  errors: state.errors.session,
  formType: "signup"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);