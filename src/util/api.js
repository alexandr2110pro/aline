const API_PREFIX = CONFIG.API_PREFIX;


export const post = (path, data, authorizedUser = {}) => {
  return fetch(_buildFullPath(path), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': authorizedUser && authorizedUser.token,
    },
    body: JSON.stringify(data)
  }).then(_handleResponse);

}


export const get = (path, authorizedUser = {}) => {
  return fetch(_buildFullPath(path), {
    headers: {
      'x-access-token': authorizedUser && authorizedUser.token
    }
  }).then(_handleResponse);
}


export const authorize = (credentials) => {
  return fetch(_buildFullPath('/users/authorize'), {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
  }).then(_handleResponse);
}


// ------------------------------------

function _handleResponse(response) {
  return response.json();
}

function _buildFullPath(path) {
  return `${API_PREFIX}${path}`.replace(/\/{2,}/g, '/');
}
