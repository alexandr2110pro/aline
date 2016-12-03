import { get } from '../util/api';


export const GET_USERS_REQUEST         = 'GET_USERS_REQUEST';
export const GET_USERS_REQUEST_START   = 'GET_USERS_REQUEST_START';
export const GET_USERS_REQUEST_FAILURE = 'GET_USERS_REQUEST_FAILURE';
export const GET_USERS_REQUEST_SUCCESS = 'GET_USERS_REQUEST_SUCCESS';


export const getUsers = () => (dispatch, getState) => {
  dispatch({type: GET_USERS_REQUEST_START})
  return get('/users', getState().authorizedUser)
    .then(users => dispatch({type: GET_USERS_REQUEST_SUCCESS, users}))
    .catch(error => dispatch({type: GET_USERS_REQUEST_FAILURE, error}));

};
