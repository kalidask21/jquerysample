const express = require('express');
const { LoginOAuth } =  require('./middleware/OAuthGenerator');
const app = express();
const winston = require('winston');

require('./startup/logger');
require('./routers/app-routes')(app);
require('./startup/db')();


// Set in windows using set path=5000
const port  = process.env.PORT || 3003;
const server = app.listen(port,() =>{
	winston.info(`listening on port ${port} `);
})


module.exports = server;