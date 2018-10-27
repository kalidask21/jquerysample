const express = require('express');
const router = express.Router();
const { validate } = require('../model/Dictionary');
const { loadWords, addWord, findWord, findAndUpdateWord,deleteAllWord} = require('../service/DictionaryService')
const { constructWordAdd, constructWordSearch, constructResponse } = require('../utils/Utils')
const { logger } = require('../startup/logger');
const { RoleFilter } =  require('../middleware/RoleFilter');

router.get('/get/all' , async (req,res) =>{
    const loadedWords = await loadWords();
    if(!loadedWords || loadedWords.length <=0)
        return constructResponse({ code : 400 , message : 'Word Information is empty' ,data : []},res);

    if(loadedWords) {
    	return constructResponse({ code : 200 , 
    		message : 'Words is Found' , data : loadedWords
    	},res);
     }		

});

router.post('/add' , async (req,res) =>{
    const { error } = validate(req.body); 
  	if (error) {
  		return constructResponse({ 
    		code : 400 , 
    		message : error.details[0].message , 
    		data : []
    	}, res);
  	}

    const newWord = constructWordAdd(req.body);
    const newWordExist = await findWord(constructWordSearch(req.body));

    if(newWordExist){
    	logger.info("Word is Exist");
     
    }

    const word = await addWord(newWord);
    if(!word || word.length <=0)
    	return constructResponse({ code : 400 , message : 'Word is failed to Add' , data : []},res)
    	
    if(word){
    	return constructResponse({ code : 200 , 
    		  message :'Word is Added',
              data : word
    	},res);
    }	
    	

})

router.delete('/delete/all' , RoleFilter , async (req,res) =>{
    const deletedWords = await deleteAllWord();
    if(!deletedWords)
        return constructResponse({ code : 400 , message : 'Delete is Failed' , data : []},res)

    if(deletedWords){
        return constructResponse({ code : 400 , message : 'Delete is success' , data : deletedWords.n},res)
    }

})

module.exports = router;