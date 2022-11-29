let router = require("express").Router();
let validator = require("../middleware/validator");
let {
  register,
  verify,
  signIn,
  signInWithToken,
  exit,
  viewMyProfile,
  updateMyprofile,
} = require("../controllers/auth");
const {accountExists: accountExistsSignUp} = require("../middleware/accountExistsSignUp");
const {accountExists: accountExistsSignIn} = require("../middleware/accountExistsSignIn");
const {accountHasBeenVerified} = require("../middleware/accountHasBeenVerified");
const userIsItself = require("../middleware/userIsItself");
const  mustSignIn  = require("../middleware/mustSignIn");
const passport =require("../config/passport")
let schemaSignUp = require("../schemas/signup");
let schemaSignIn = require("../schemas/signin");

router.post("/sign-up", validator(schemaSignUp), accountExistsSignUp, register);
router.get("/verify/:code", verify);
router.post("/sign-in",validator(schemaSignIn),accountExistsSignIn,accountHasBeenVerified,signIn);
router.post("/token",passport.authenticate("jwt", { session: false }),mustSignIn, signInWithToken);
router.post("/sign-out", passport.authenticate("jwt", { session: false }), exit);
router.get(
  "/me/:id",
  passport.authenticate("jwt", { session: false }),
 userIsItself,
  viewMyProfile
);
router.patch(
  "/me/:id",
  passport.authenticate("jwt", { session: false }),
  userIsItself,
  updateMyprofile
);
module.exports = router;

