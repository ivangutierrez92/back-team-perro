let router = require("express").Router();
let auths = require("./auths");
let cities = require("./cities");
let hotels = require("./hotels");
let itineraries = require("./itineraries");
let shows = require("./shows");


router.use("/api/auth", auths);
router.use("/api/cities", cities);
router.use("/api/hotels", hotels);
router.use("/api/itineraries", itineraries);
router.use("/api/shows", shows);

module.exports = router;
