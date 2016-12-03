import {
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESS,
  AUTH_REQUEST_FAILURE,
  SIGNOUT_USER
} from '../actions/auth';

export const authorizedUser = (state = null, action) => {
  switch (action.type) {

  case SIGNOUT_USER:
    return null;

  case AUTH_REQUEST_START:
    return {
      process: true,
    }

  case AUTH_REQUEST_SUCCESS:
    const {success, token, userData} = action.data;

    return {
      ...userData,
      authorized: success,
      token,
    };

  case AUTH_REQUEST_FAILURE:
    // maybe do something....
  default:
    return state;
  }
}

function clear() {

}
