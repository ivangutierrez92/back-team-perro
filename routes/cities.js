let router = require('express').Router();
let { read, show, create, update } = require('../controllers/city');

router.post('/', create);
router.get('/', read);
router.put('/:id', update);
router.get('/:id', show);

module.exports = router;
