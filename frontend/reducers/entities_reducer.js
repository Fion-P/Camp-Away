import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import campsReducer from './camps_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  camps: campsReducer,
});

export default entitiesReducer;