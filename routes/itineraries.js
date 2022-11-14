let router = require('express').Router();
let { create, read, update } = require('../controllers/itinerary');

router.post('/', create);
router.get('/', read);
router.put('/:id', update);

module.exports = router;
