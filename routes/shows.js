let router = require("express").Router();

let { read, create, updateShow, deleteShow,readOne} = require("../controllers/show");

router.get("/", read);
router.post("/", create);
router.patch("/:id",updateShow);
router.delete("/:id", deleteShow);
router.get("/:id",readOne);
module.exports = router;
