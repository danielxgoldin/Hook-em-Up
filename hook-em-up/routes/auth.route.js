const express = require('express'),
	router = express.Router(),
	{ userHandler, loginHandler, registerHandler } = require('../controllers/auth'),
	{ checkAuthentication } = require('../middleware/authentication.middleware');

router.route('/register').post(registerHandler);
router.route('/login').post(loginHandler);
router.route('/user').get(checkAuthentication, userHandler);

module.exports = router;



