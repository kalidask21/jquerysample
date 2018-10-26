const mongoose = require('mongoose');
const Joi = require('joi');

const dbSchema = new mongoose.Schema({
     word : {
          type: String,
          minlength :3,
          maxlength : 100
     },
     example :{
     	type : [String]
     }
})


// JOI Schema

const joiSchema = {
    word: Joi.string().min(3).max(100).required(),
    example :Joi.array()
};

module.exports = {
	dbSchema,
	joiSchema
}