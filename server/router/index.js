const auth   = require('../lib/auth');
const router = require('express').Router();

router.use(auth.createMiddleware({
  ignoreRoutes: [
    '/',
    '/users/authorize',
    '/contact/create-message',
  ]
}));

router.use('/users', require('./users'));
router.use('/contact', require('./contact'));

module.exports = function(app) {
  app.use('/', router);
}
