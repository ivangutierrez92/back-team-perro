let router = require("express").Router();
const passport = require("../config/passport");
const validator = require("../middleware/validator");
const schema = require("../schemas/comment");
const {read,create}=require("../controllers/comment")

router.get("/",read)
router.post("/", passport.authenticate("jwt", { session: false }),validator(schema),create)

module.exports = router;
