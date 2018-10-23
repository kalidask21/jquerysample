const constructUserObj = ({name,email,password}) =>{
      	return {
      		name : name,
      		email : email,
      		password : password
      	}
}  
const constructResponse = ({ code, message, data},res) =>{
    res.status(code).send(JSON.stringify(
    	{
    		message:message,
    		data:data
		}));
}   
module.exports = {
      constructUserObj,
      constructResponse
}