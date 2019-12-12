import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import MessageContainer from '../message/message.container';
import UpdateReviewContainer from '../reviews/update_review_container';
import DeleteBookingContainer from '../bookings/delete_booking_container';

function Modal({ modal, closeModal }) {

  if (!modal) {
    return null;
  }
  let component;

  //  changes the component of the modal based on the case
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'message':
      component = <MessageContainer />;
      break;
    case 'edit':
      component = <UpdateReviewContainer />;
      break;
    case 'delete':
      component = <DeleteBookingContainer /> 
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <br/>
      <br/>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
      <br/>
      <br/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);