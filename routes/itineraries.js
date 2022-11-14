let router = require('express').Router();
let { create, read } = require('../controllers/itinerary');

router.post('/', create);
router.get('/', read);

module.exports = router;
