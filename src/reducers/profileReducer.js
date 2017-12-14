import { RECEIVE_FIRST_NAME, RECEIVE_LAST_NAME, RECEIVE_BIO } from '../actions/profileActions';

const defaultState = {
  firstName: "",
  lastName: "",
  bio: "",
  location: "",
};

const ProfileReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FIRST_NAME: {
      return state;
    }
    case RECEIVE_LAST_NAME: {
      return state;
    }
    case RECEIVE_BIO: {
      return state;
    }
    default: return state;
  }
};

export default ProfileReducer;
