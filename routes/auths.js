let router = require("express").Router();
let { register, verify } = require("../controllers/auth");
const { accountExists: accountExistsSignUp } = require("../middleware/accountExistsSignUp");
let validator = require("../middleware/validator");
let schema = require("../schemas/signup");

router.post("/signup", validator(schema), accountExistsSignUp, register);
router.get("/verify/:code", verify);

module.exports = router;
