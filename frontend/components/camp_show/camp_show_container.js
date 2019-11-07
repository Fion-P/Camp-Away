import { connect } from 'react-redux';

import { fetchCamp } from '../../actions/camp_actions';
import CampShow from './camp_show';

const mapStateToProps = (state, ownProps) => ({
  camp: state.camps[ownProps.match.params.campId]
});

const mapDispatchToProps = dispatch => ({
  fetchCamp: (campId) => dispatch(fetchCamp(campId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampShow);