const jwt  = require('jsonwebtoken');

module.exports.LoginFilter = (req,res,next) =>{
   console.log('MiddleWare for Login Validator ...');
   const apiKey = req.headers['x-api-key'];
   let isactive = false; 
   const token = jwt.verify(apiKey, 'jsonPrivateAppKey');
   console.log('isactive :',token);
   if(token && token.isactive){
   	 	next();
   }
   else{
   	 res.status(401).send('your not authorized to view.');
   }
} 