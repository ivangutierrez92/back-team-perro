let router = require("express").Router();
const passport = require("../config/passport");
let { create, read, update } = require("../controllers/reaction");
const userIsOwner = require("../middleware/userIsOwner");
const validator = require("../middleware/validator");
const reactionSchema = require("../schemas/reaction")

router.get("/", read)
router.post("/", passport.authenticate("jwt", { session: false }), validator(reactionSchema), create);
router.put("/", passport.authenticate("jwt", { session: false }), update)
module.exports = router;
