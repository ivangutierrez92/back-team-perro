const router= require('express').Router();

const {create} = require('../controllers/hotel');

router.post('/',create);

module.exports= router;