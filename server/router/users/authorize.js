const _    = require('lodash');
const auth = require('../../lib/auth');

const CREDENTIALS_MOCK = {
  email: 'john@doe.com',
  password: 'secret'
};

const USERS_MOCK = require('./users.mock');

module.exports = function authorize(req, res) {
  const {email, password} = req.body;

  if (!email || CREDENTIALS_MOCK.email !== email) {
    return res
      .status(403)
      .send({
        success: false,
        message: 'Authentication failed. User not found.'
      });
  }

  if (!password || password !== CREDENTIALS_MOCK.password) {
    return res
      .status(403)
      .send({
        success: false,
        message: 'Authentication failed. Wrong password.'
      });

  }

  const token    = auth.createToken({email, password});
  const userData = _.find(USERS_MOCK, u => u.email === email);

  res.json({
    userData,
    success: true,
    message: 'Authorized',
    token: token
  });
};
