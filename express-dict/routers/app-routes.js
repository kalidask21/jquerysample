const express = require('express');
const MessageController = require('../controller/MessageController');
const UserController = require('../controller/UserController');

module.exports = function(app){
      app.use(express.json());
	  app.use(express.urlencoded({extended : true }));
      app.use('/api/info',MessageController);
      app.use('/api/user',UserController);
}