let router = require("express").Router();

let users = require("./users");
let cities = require("./cities");
let hotels = require("./hotels");

router.use("/api/users", users);
router.use("/api/cities", cities);
router.use("/api/hotels", hotels);

module.exports = router;
