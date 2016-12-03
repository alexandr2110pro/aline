import {
  GET_USERS_REQUEST_START,
  GET_USERS_REQUEST_SUCCESS,
  GET_USERS_REQUEST_FAILURE,
} from '../actions/users';

export const users = (state = {
  isLoading: false,
  list: []
}, action) => {
  switch (action.type) {

  case GET_USERS_REQUEST_START:
    return {
      ...state,
      isLoading: true
    };

  case GET_USERS_REQUEST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      list: action.users,
    };

  case GET_USERS_REQUEST_FAILURE:
    // maybe do something....
  default:
    return state;
  }
}

function clear() {

}
