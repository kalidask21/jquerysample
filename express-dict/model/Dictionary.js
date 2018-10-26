const mongoose  = require('mongoose');
const Joi = require('joi');
const { dbSchema,joiSchema }  = require('./schema/DictionarySchema');

const Dictionary = mongoose.model('Dictionary', dbSchema);

const validate = (dict) => {
  return Joi.validate(dict,joiSchema);
}

module.exports = {
	Dictionary,
	validate
}