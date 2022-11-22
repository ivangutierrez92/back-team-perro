let router = require('express').Router();
let { read, show, create, update, destroy } = require('../controllers/city');
const validator = require('../middleware/validator');

const schema = require('../schemas/city');

router.post('/', validator(schema) ,create);
router.get('/', read);
router.put('/:id', update);
router.delete('/:id', destroy)
router.get('/:id', show);

module.exports = router;
