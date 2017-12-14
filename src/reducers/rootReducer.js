import { combineReducers } from 'redux';
import ProfileReducer from './profileReducer';

export default combineReducers({
  user: ProfileReducer,
});
