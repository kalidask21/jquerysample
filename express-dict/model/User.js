const mongoose  = require('mongoose');
const Joi = require('joi');
const { dbSchema,joiSchema}  = require('./schema/UserSchemas')

const User = mongoose.model('User', dbSchema);

const  validate = (user) => {
  return Joi.validate(user,joiSchema)
}

module.exports = {
   User,
   validate
}