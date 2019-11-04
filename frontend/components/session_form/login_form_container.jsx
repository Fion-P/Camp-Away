import Login from './login';
import { login, signup } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'login'
  }
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);