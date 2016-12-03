const router = require('express').Router();

router.post('/authorize', require('./authorize'));
router.get('/', require('./get'));

module.exports = router;

