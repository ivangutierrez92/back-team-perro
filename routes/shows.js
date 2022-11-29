let router = require("express").Router();
const Show = require("../models/Show");
const passport = require("../config/passport");
const userIsOwner = require("../middleware/userIsOwner");
const schema =require('../schemas/shows')
const validator= require('../middleware/validator')



let { read, create, updateShow, deleteShow,readOne} = require("../controllers/show");
router.get("/", read);
router.post("/",passport.authenticate("jwt", { session: false }),validator(schema), create);
router.patch("/:id",passport.authenticate("jwt", { session: false }),userIsOwner(Show),updateShow);
router.delete("/:id",passport.authenticate("jwt", { session: false }),userIsOwner(Show), deleteShow);
router.get("/:id",readOne);
module.exports = router;
