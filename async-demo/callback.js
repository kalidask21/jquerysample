function getUser(callback){
    setTimeout(() =>{
        console.log('getuser :')
        callback({ user : 'kalidas' });
    },2000);	
}


function welcomePrint(name,callback){
    setTimeout(() =>{
        console.log('welcomePrint  :',name);
        callback({ message : 'Welcome '});
    },2000);	
}

function userCallBack(input){
	console.log('user : ',input.user);
	welcomePrint(input,welcomeCallBack);
}

function welcomeCallBack(input){
	console.log(input.message);
}


const input = getUser(userCallBack);
///console.log(user);
