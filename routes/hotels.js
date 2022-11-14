const router = require("express").Router();

const { create,read,readOne,update } = require("../controllers/hotel");

router.post("/", create);
router.get("/", read);
router.get("/:id", readOne);
router.patch("/:id", update);

module.exports = router;
