let router = require("express").Router();

let { read } = require("../controllers/show");

router.get("/", read);
module.exports = router;