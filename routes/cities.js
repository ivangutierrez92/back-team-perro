let router = require('express').Router();
let { read, create } = require('../controllers/city');

router.get('/', read);
router.post('/', create);

module.exports = router;
