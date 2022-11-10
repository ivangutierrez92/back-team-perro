let router = require('express').Router();

let users = require("./users");
let cities = require("./cities");

router.use('/api/users', users);
router.use('/api/cities', cities);

module.exports = router;
