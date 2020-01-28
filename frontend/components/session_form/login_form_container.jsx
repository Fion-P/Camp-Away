import Login from './login';
import { login, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({errors}) => {
  // let currentUser 
  // if (!state.entities.users) {
  //   currentUser = null
  // } else {
  //   currentUser = state.entities.users[state.session.id];
  // }
  return {
    errors: errors.session,
    formType: "login",
    // currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);