const express = require('express');
const router = express.Router();
const { loadUsers , addUser,findUser, removeAllUser } = require('../service/UserService')
const { constructUserAdd, constructUserSearch, constructResponse } = require('../utils/Utils')

router.get('/get/all' , async (req,res) =>{
    const users = await loadUsers();
    if(!users || users.length <=0)
        return constructResponse({ code : 400 , message : 'User Information is empty' ,data : []},res);

    if(users) {
    	return constructResponse({ code : 200 , 
    		message : 'User Informations is Found' , data : users
    	},res);
     }	
    	

});

router.post('/add' , async (req,res) =>{
    const newUser = constructUserAdd(req.body);
    const userExist = await findUser(constructUserObj(req.body));

    if(userExist){
    	return constructResponse({ 
    		code : 400 , 
    		message : 'User Information is already exist , Please try another data' , 
    		data : userExist},res)
    }

    const user = await addUser(newUser);
    if(!user || user.length <=0)
    	return constructResponse({ code : 400 , message : 'User Information is failed to Add' , data : []},res)
    	
    if(user){
    	return constructResponse({ code : 200 , 
    		  message :'User Information is Added',
              data : user
    	},res);
    }	
    	

})

router.delete('/delete/all' , async (req,res) =>{
    const deletedUsers = await removeAllUser();
    if(!deletedUsers)
    	return constructResponse({ code : 400 , message : 'Delete is Failed' , data : []},res)

    if(deletedUsers){
    	return constructResponse({ code : 400 , message : 'Delete is success' , data : deletedUsers.n},res)
    }

})

module.exports = router;