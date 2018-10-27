const jwt  = require('jsonwebtoken');
const {logger} = require('../startup/logger');

module.exports.RoleFilter = (req,res,next) => {
   logger.info(' RoleFilter ');
   logger.info(req.headers);
   const userRole = req.headers['user-role'];
   //let isactive = false; 
  // const token = jwt.verify(apiKey, 'jsonPrivateAppKey');
   logger.info('userRole is  :',userRole);
   if(userRole && userRole === 'role-admin'){
   	 	next();
   }
   else{
   	 res.status(401).send('Your not authorized to delete.');
   }
} 