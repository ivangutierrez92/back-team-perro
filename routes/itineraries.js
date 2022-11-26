let router = require("express").Router();
const passport = require("../config/passport");
let { create, read, update, destroy, show } = require("../controllers/itinerary");
const userIsOwner = require("../middleware/userIsOwner");
const Itinerary = require("../models/Itinerary");

router.post("/", passport.authenticate("jwt", { session: false }), create);
router.get("/", read);
router.put("/:id", passport.authenticate("jwt", { session: false }), userIsOwner(Itinerary), update);
router.delete("/:id", passport.authenticate("jwt", { session: false }), userIsOwner(Itinerary), destroy);
router.get("/:id", show);
module.exports = router;
