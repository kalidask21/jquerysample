const mongoose = require('mongoose');


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
   	 .then(() => console.log('Connected to MongoDB...'))
   	 .catch((ex) => console.log('Failed Connected to MongoDB...',ex));
}