export const RECEIVE_FIRST_NAME = 'RECEIVE_FIRST_NAME';
export const RECEIVE_LAST_NAME = 'RECEIVE_LAST_NAME';
export const RECEIVE_BIO = 'RECEIVE_BIO';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const receiveFirstName = firstName => ({
  firstName,
  type: RECEIVE_FIRST_NAME,
});

export const receiveLastName = lastName => ({
  lastName,
  type: RECEIVE_LAST_NAME,
});

export const receiveBio = bio => ({
  bio,
  type: RECEIVE_BIO,
});

export const receiveLocation = location => ({
  location,
  type: RECEIVE_LOCATION,
});
