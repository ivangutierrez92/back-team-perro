const joi = require("joi");

const schema = joi.object({
  showId: joi.string().hex().length(24).required(),
  userId: joi.string().hex().length(24).required(),
  date: joi.date().required(),
  comment: joi.string().required().min(3),
});

module.exports = schema;
