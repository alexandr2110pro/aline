const _   = require('lodash');
const jwt = require('jsonwebtoken');

const EXPIRE_TIME = '24h';

let _secret = null;

const auth = exports = module.exports = {

  setSecret(secret) {
    _secret = secret;
  },


  createToken(user) {
    return jwt.sign(user, _secret, {expiresIn: EXPIRE_TIME})
  },


  validate(token, callback) {
    jwt.verify(token, _secret, callback);
  },


  createMiddleware(options = {}) {
    const {ignoreRoutes = []} = options;

    return (req, res, next) => {
      const token        = req.body.token || req.query.token || req.headers['x-access-token'];
      const shouldIgnore = _.find(ignoreRoutes, (r) => req.path === r);
      console.log(shouldIgnore, req.path, ignoreRoutes);
      if (shouldIgnore) return next();

      if (!token) {
        return res.status(403).send({
          success: false,
          message: 'No token provided.'
        });
      }

      return auth.validate(token, (err, decoded) => {
        if (err) {
          return res.status(403).send({
            success: false,
            message: 'Failed to authenticate token.'
          });
        }

        req.decoded = decoded;
        next();
      });
    };
  }
}
