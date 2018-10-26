const express = require('express');
const MessageController = require('../controller/MessageController');
const UserController = require('../controller/UserController');
const DictionaryController = require('../controller/DictionaryController');
const { LoginFilter } =  require('../middleware/LoginValidatorFilter');

module.exports = function(app){
      app.use(express.json());
	  app.use(express.urlencoded({extended : true }));
	  app.use(LoginFilter);
      app.use('/api/info',MessageController);
      app.use('/api/user',UserController);
      app.use('/api/word',DictionaryController);
}