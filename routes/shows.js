let router = require("express").Router();

let { read } = require("../controllers/show");

router.get("/", read);
router.post("/", create);
module.exports = router;
