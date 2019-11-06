import Login from './login';
import { login, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'login'
  }
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);