const jwt = require('jsonwebtoken');

const USERS_MOCK = require('./users.mock');

module.exports = function getUsers(req, res) {
  return res.json(USERS_MOCK)
}
