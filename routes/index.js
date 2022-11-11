let router = require("express").Router();

let users = require("./users");
let cities = require("./cities");
let hotels = require("./hotels");
let itineraries = require("./itineraries");

router.use("/api/users", users);
router.use("/api/cities", cities);
router.use("/api/hotels", hotels);
router.use("/api/itineraries", itineraries);

module.exports = router;
