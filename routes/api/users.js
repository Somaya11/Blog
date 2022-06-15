const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST request for  /api/users/signup
router.post('/signup', usersCtrl.signup);
// POST  request for /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;