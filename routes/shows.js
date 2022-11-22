let router = require("express").Router();

let { read, create, updateShow, deleteShow} = require("../controllers/show");

router.get("/", read);
router.post("/", create);
router.patch("/:id",updateShow);
router.delete("/:id", deleteShow);
module.exports = router;
