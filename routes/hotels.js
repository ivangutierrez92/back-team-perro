const router = require("express").Router();

const { create,read,readOne } = require("../controllers/hotel");

router.post("/", create);
router.get("/", read);
router.get("/:id", readOne);

module.exports = router;
