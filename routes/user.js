const express = require('express');
const router = express.Router();
const helpers = require('../helpers/user');

router.get('/users', helpers.getUsers); 
router.post('/users', helpers.postUsers);
module.exports = router;