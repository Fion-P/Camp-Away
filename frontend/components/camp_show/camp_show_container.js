import { connect } from 'react-redux';

import { fetchCamp } from '../../actions/camp_actions';
import { fetchUser } from '../../actions/session_actions';
import CampShow from './camp_show';

const mapStateToProps = (state, ownProps) => ({
  camp: state.entities.camps[ownProps.match.params.campId],
});

const mapDispatchToProps = dispatch => ({
  fetchCamp: (campId) => dispatch(fetchCamp(campId)),
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampShow);