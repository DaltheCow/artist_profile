import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/rootReducer'

// const middleware = (window.location.href.indexOf('http://localhost') === 0 ? [thunk, logger] : [thunk]);

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(logger));
};

export default configureStore;
