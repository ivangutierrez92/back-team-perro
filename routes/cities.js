let router = require('express').Router();
const passport = require("../config/passport");
let { read, show, create, update, destroy } = require('../controllers/city');
const userIsOwner = require('../middleware/userIsOwner');
const validator = require('../middleware/validator');
const City = require('../models/City');

const schema = require('../schemas/city');

router.post('/', passport.authenticate("jwt", { session: false }), validator(schema) ,create);
router.get('/', read);
router.put('/:id', passport.authenticate("jwt", { session: false }), userIsOwner(City), update);
router.delete('/:id', passport.authenticate("jwt", { session: false }), userIsOwner(City), destroy)
router.get('/:id', show);

module.exports = router;
