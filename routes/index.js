let router = require('express').Router();

let users = require("./users");

router.use('/api/users', users);






module.exports = router;
