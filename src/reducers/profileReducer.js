import { RECEIVE_FIRST_NAME, RECEIVE_LAST_NAME, RECEIVE_BIO, RECEIVE_LOCATION } from '../actions/profileActions';

const defaultState = {
  firstName: '',
  lastName: '',
  bio: '',
  location: '',
};

const ProfileReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FIRST_NAME: {
      const { firstName } = action;
      const newState = Object.assign({}, state, { firstName });
      return newState;
    }
    case RECEIVE_LAST_NAME: {
      const { lastName } = action;
      const newState = Object.assign({}, state, { lastName });
      return newState;
    }
    case RECEIVE_BIO: {
      const { bio } = action;
      const newState = Object.assign({}, state, { bio });
      return newState;
    }
    case RECEIVE_LOCATION: {
      const { location } = action;
      const newState = Object.assign({}, state, { location });
      return newState;
    }
    default: return state;
  }
};

export default ProfileReducer;
