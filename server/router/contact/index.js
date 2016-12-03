const router = require('express').Router();

router.post('/create-message', require('./create-message'));

module.exports = router;

