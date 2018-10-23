const { addUser, removeAllUser } = require('../../service/LoginService');


describe('User functionality test', () =>{
     beforeEach(async () => {
      	server = require('../../index'); 
     })
	 afterEach(async () => { 
	    server.close(); 
	 });

     it('AddUser Test',() =>{
        expect(addUser).toBeDefined();
     })

     it('Remove All Test',() =>{
        try{
        	removeAllUser;
        }
        catch(ex){
        	console.log(ex);
        }
    })

});