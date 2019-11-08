import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) => {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
  }
   return createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(...middleware, logger)
  )
};

export default configureStore;