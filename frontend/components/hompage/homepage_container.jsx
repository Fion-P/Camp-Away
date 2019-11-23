import React from 'react';
import { connect } from 'react-redux';
import { fetchCamps } from '../../actions/camp_actions';
import HomePage from './homepage';

const mapStateToProps = (state) => ({
  camps: Object.keys(state.entities.camps).map(key => state.entities.camps[key])
});

const mapDispatchToProps = (dispatch) => ({
  fetchCamps: () => dispatch(fetchCamps()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);