import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  FETCH_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    // case FETCH_USER: 
    //   let nextState = Object.assign({}, state);
    //   nextState[action.user.id] = action.user;
    //   return nextState;
    default:
      return state;
  }
};

export default sessionReducer;