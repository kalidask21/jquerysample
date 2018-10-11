const jwt  = require('jsonwebtoken');

const isUserValid = (req,resp) => {
	   console.log(req.body);
   	   const username = req.body.username;
   	   const password = req.body.password;
   	   if(username === 'test' && password === 'test'){
           const apiKey = jwt.sign({ username : username , isactive : true }, 'jsonPrivateAppKey');
           console.log('apiKey : '+apiKey);
           resp.set('x-oauth-token',apiKey);
           return resp.status(401).send({
               token : apiKey
           });
   	   }
   	   else{
   	   	 return res.status(401).send('Invalid Credentials.');
   	   }
}

module.exports.LoginOAuth = (req,res) =>{
   console.log('MiddleWare for Auth Generator...');
   return isUserValid(req,res);
   	
} 