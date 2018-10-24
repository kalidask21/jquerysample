const mongoose  = require('mongoose');
const Joi = require('joi');
// DB Schema.

const dbSchema  = new mongoose.Schema({
   name : {
   	 type : String,
   	 required :true,
   	 minlength : 5,
   	 maxlength : 50
   },
   email : {
   	 type : String,
   	 required :true,
   	 minlength : 5,
   	 maxlength : 50
   },
   password : {
   	 type : String,
   	 required :true,
   	 minlength : 5,
   	 maxlength : 50
   },

})

// JOI Schema

const joiSchema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
};


module.exports ={
   dbSchema,
   joiSchema
}