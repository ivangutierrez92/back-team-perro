const joi = require('joi');


const schema = joi.object({
  name: joi.string().required().min(3).max(30),
  photo: joi.string().uri().required(),
  capacity: joi.number().required(),
  cityId:joi.string().hex().length(24).required(),
  userId: joi.string().hex().length(24).required(),
});





module.exports=schema;

