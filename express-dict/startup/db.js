const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function() {
	 mongoose.connect('mongodb://ds031108.mlab.com:31108/dictionary-dev',
	 {
	  	auth: {
      		user: 'test',
	  		password: 'test123',
     	},
     	useNewUrlParser: true 
     }
 	 )
   	 .then(() => winston.info(' Connected to MongoDB...'))
   	 .catch((ex) => winston.info('Failed Connected to MongoDB...',ex));
}