const router = require("express").Router();
const schema =require('../schemas/hotel')
const validator= require('../middleware/validator')
const passport = require("../config/passport");
const userIsOwner = require("../middleware/userIsOwner");
const Hotel = require("../models/Hotel")
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
router.patch("/:id",passport.authenticate("jwt", { session: false }),update);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  userIsOwner(Hotel),
  deleteHotel
);


module.exports = router;
