var express = require('express');
var router = express.Router();

const userRoute = require('./user/userRoute');
const bookRoute = require('./books/bookRoute');

//========================== Export Module Start ==========================

//API version 1
router.use('/user', userRoute);
router.use('/book', bookRoute);

module.exports = router;
//========================== Export Module End ============================