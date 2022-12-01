const joi = require("joi");

const schema = joi.object({
  showId: joi.string().hex().length(24).required(),
  comment: joi.string().required().min(3),
});

module.exports = schema;
