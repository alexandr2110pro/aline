import { post } from '../util/api';


export const CONTACT_MESSAGE_REQUEST_START   = 'CONTACT_MESSAGE_REQUEST_START';
export const CONTACT_MESSAGE_REQUEST_FAILURE = 'CONTACT_MESSAGE_REQUEST_FAILURE';
export const CONTACT_MESSAGE_REQUEST_SUCCESS = 'CONTACT_MESSAGE_REQUEST_SUCCESS';


export const sendContactMessage = (data) => (dispatch, getState) => {
  dispatch({type: CONTACT_MESSAGE_REQUEST_START})
  return post('/contact/create-message', data, getState().authorizedUser)
    .then(data => dispatch({type: CONTACT_MESSAGE_REQUEST_SUCCESS, data}))
    .catch(error => dispatch({type: CONTACT_MESSAGE_REQUEST_FAILURE, error}));
};
