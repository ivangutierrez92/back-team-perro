const router = require("express").Router();
const schema =require('../schemas/hotel')
const validator= require('../middleware/validatorHotel')
const {
  create,
  read,
  readOne,
  update,
  deleteHotel,
} = require("../controllers/hotel");

router.post("/",validator(schema),create);
router.get("/", read);
router.get("/:id", readOne);
router.patch("/:id", update);
router.delete("/:id", deleteHotel);


module.exports = router;
