let router = require('express').Router();
let { read, show, create } = require('../controllers/city');

router.post('/', create);
router.get('/', read);
router.get('/:id', show);

module.exports = router;
