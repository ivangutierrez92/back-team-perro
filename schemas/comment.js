const joi = require("joi");

const schema = joi.object({
  showId: joi.string().hex().length(24),
  itineraryId: joi.string().hex().length(24),
  comment: joi.string().min(3).required(),
});

module.exports = schema;
