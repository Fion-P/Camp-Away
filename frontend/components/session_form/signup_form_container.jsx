import Signup from './signup';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);