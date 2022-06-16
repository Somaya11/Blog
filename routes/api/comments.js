const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/api/comments');

router.post('/Articles', commentCtrl.create)

// router.get('/', commentCtrl.index)

module.exports = router;