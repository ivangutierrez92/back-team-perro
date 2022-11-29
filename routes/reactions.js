let router = require("express").Router();
const passport = require("../config/passport");
let { create } = require("../controllers/reaction");
const userIsOwner = require("../middleware/userIsOwner");
const validator = require("../middleware/validator");
const reactionSchema = require("../schemas/reaction")

router.post("/", passport.authenticate("jwt", { session: false }), validator(reactionSchema), create);
module.exports = router;
