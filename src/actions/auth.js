import {
  post,
  authorize
} from '../util/api';


export const AUTH_REQUEST         = 'AUTH_REQUEST';
export const AUTH_REQUEST_START   = 'AUTH_REQUEST_START';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_FAILURE = 'AUTH_REQUEST_FAILURE';

export const SIGNOUT_USER = 'SIGNOUT_USER'

export const authorizeUser = credentials => (dispatch, getState) => {
  dispatch({type: AUTH_REQUEST_START});

  return authorize(credentials)
    .then(data => dispatch({
      type: AUTH_REQUEST_SUCCESS,
      email: credentials.email,
      data,
    }))
    .catch(error => dispatch({type: AUTH_REQUEST_FAILURE, error}));
}


export const signoutUser = () => {
  return {type: SIGNOUT_USER}
}
