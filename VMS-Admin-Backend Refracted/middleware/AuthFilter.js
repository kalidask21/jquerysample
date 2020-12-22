//const jwt  = require('jsonwebtoken');
//const {logger} = require('../config/logger');

module.exports.LoginFilter = (req,res,next) => {
   //logger.info(' Login Validator ...');
   //logger.info(req.headers);
   const apiKey = req.headers['x-api-key'];
   //let isactive = false; 
  // const token = jwt.verify(apiKey, 'jsonPrivateAppKey');
   //logger.info(' apiKey is  :',apiKey);
   if(apiKey && apiKey === 'api-secret-vmsapp'){
   	 	next();
   }
   else{
   	 res.status(401).send('your not authorized to view.');
   }
} 