const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().messages({
    "any.required": "The field 'name' is required, please enter it",
    "string.empty": "The field 'name' mustn't be empty, please fill it",
    "string.base": "The field 'name' must be a string",
  }),
  continent: joi.string().valid("Africa", "America", "Asia", "Europe", "Oceania").required().messages({
    "any.required": "The field 'continent' is required, please enter it",
    "any.only": "The field 'continent' must be a valid continent: Africa, America, Asia, Europe, Oceania",
    "string.empty": "The field 'continent' mustn't be empty, please fill it",
    "string.base": "The field 'continent' must be a string",
  }),
  photo: joi.string().uri().required().messages({
    "any.required": "The field 'photo' is required, please enter it",
    "string.empty": "The field 'photo' mustn't be empty, please fill it",
    "string.base": "The field 'photo' must be a string",
    "string.uri": "The field 'photo' must be an url",
  }),
  population: joi.number().integer().min(0).required().messages({
    "any.required": "The field 'population' is required, please enter it",
    "number.base": "The field 'population' must be a number",
    "number.integer": "The field 'population' must be an integer, please change it",
    "number.min": "The field 'population' must be a number greater or equal to 0, please change it",
  }),
});

module.exports = schema;
