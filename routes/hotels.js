const router = require("express").Router();

const { create,read } = require("../controllers/hotel");

router.post("/", create);
router.get("/", read);

module.exports = router;
