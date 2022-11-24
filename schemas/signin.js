const joi = require("joi");

const schemaSignIn = joi.object({
  email: joi.string().email().required().messages({
    "any.required": "The field 'email' is required, please enter it",
    "string.email": "The field 'email' must be a valid email address",
    "string.empty": "The field 'email' mustn't be empty, please fill it",
    "string.base": "The field 'email' must be a string",
  }),
  password: joi.string().required().messages({
    "any.required": "The field 'password' is required, please enter it",
    "string.empty": "The field 'password' mustn't be empty, please fill it",
    "string.base": "The field 'password' must be a string",
  }),
});

module.exports = schemaSignIn;