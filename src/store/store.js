import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import RootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(logger))
);

export default configureStore;
