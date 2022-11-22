const router = require("express").Router();

const { create,read,readOne,update,deleteHotel } = require("../controllers/hotel");

router.post("/", create);
router.get("/", read);
router.get("/:id", readOne);
router.patch("/:id", update);
router.delete("/:id", deleteHotel);

module.exports = router;
