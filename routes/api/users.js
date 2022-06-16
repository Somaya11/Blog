const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');




/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'))
// POST request for  /api/users/signup
router.post('/signup', usersCtrl.signup);
// // POST  request for /api/users/login
router.post('/login', usersCtrl.login);

// router.get('/', require('../../config/auth'), usersCtrl.index)




module.exports = router; 