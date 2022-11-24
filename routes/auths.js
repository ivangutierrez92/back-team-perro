let router = require("express").Router();
let { register, verify, exit } = require("../controllers/auth");
const { accountExists: accountExistsSignUp } = require("../middleware/accountExistsSignUp");
let validator = require("../middleware/validator");
let schema = require("../schemas/signup");

router.post("/sign-up", validator(schema), accountExistsSignUp, register);
router.get("/verify/:code", verify);

router.post("/sign-out", exit);
module.exports = router;
