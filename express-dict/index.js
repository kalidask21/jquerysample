const express = require('express');
const { LoginFilter } =  require('./middleware/LoginValidatorFilter');
const { LoginOAuth } =  require('./middleware/OAuthGenerator');
const app = express();

require('./routers/app-routes')(app);
require('./startup/db')();


// Set in windows using set path=5000
const port  = process.env.PORT || 3003;
const server = app.listen(port,() =>{
	console.log(`listening on port ${port} `);
})


module.exports = server;