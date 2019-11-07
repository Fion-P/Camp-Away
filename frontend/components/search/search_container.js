import Search from './search';
import { fetchCamps } from '../../actions/camp_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    camps: Object.keys(state.entities.camps).map(key => state.entities.camps[key])
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchCamps: () => dispatch(fetchCamps()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);