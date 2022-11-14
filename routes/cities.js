let router = require('express').Router();
let { read, show, create, update, destroy } = require('../controllers/city');

router.post('/', create);
router.get('/', read);
router.put('/:id', update);
router.delete('/:id', destroy)
router.get('/:id', show);

module.exports = router;
