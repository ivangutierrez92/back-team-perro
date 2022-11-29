let router = require("express").Router();
const passport = require("../config/passport");
const validator = require("../middleware/validator");
const schema = require("../schemas/comment");
let {read,create}=require("../controllers/comment")

router.get("/:id",passport.authenticate("jwt",{session:false}),read)
router.post("/", passport.authenticate("jwt", { session: false }),validator(schema),create)

module.exports = router;
