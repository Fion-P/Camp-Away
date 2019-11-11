import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import campsReducer from './camps_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  camps: campsReducer,
  bookings: bookingsReducer,
});

export default entitiesReducer;