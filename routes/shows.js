let router = require("express").Router();

let { read, create, updateShow} = require("../controllers/show");

router.get("/", read);
router.post("/", create);
router.patch("/:id",updateShow);
module.exports = router;
