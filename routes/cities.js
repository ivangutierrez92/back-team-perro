let router = require('express').Router();
let { read, show, create, update, destroy } = require('../controllers/city');
const cityValidator = require('../middleware/cityValidator');

const schema = require('../schemas/city');

router.post('/', cityValidator(schema) ,create);
router.get('/', read);
router.put('/:id', update);
router.delete('/:id', destroy)
router.get('/:id', show);

module.exports = router;
