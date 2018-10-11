const credentials = {
	username : 'kalidas1',
	password : 'KK'
}

const usernamePatter = /kalidas/i
//console.log(usernamePatter.test(credentials.username));

const dataPromise = (credentials) =>{
   return new Promise((resolve,reject) =>{
      setTimeout(()=>{
      	if(credentials.username && credentials.password)
      		resolve(credentials);
      	else
      		reject(new Error('Credentials is not valid'));
      },2000);
   })
};

const isValidCredentials = (credentials) =>{
   return new Promise((resolve,reject) =>{
      setTimeout(()=>{
      	 console.log('data validation :',credentials ,);
      	if(usernamePatter.test(credentials.username) && usernamePatter.test(credentials.password))
      		resolve(credentials);
      	else
      		reject(new Error('Data is not valid'));
      },2000);
   })
};

const loginPromise = (credentials) =>{
   return new Promise((resolve,reject) =>{
      setTimeout(()=>{
      	 console.log('logged in with user :',credentials.username)
      	 resolve(true);
      },2000);
   })
};


const loadPagePromises = (isLoggedIn) =>{
   return new Promise((resolve,reject) =>{
      setTimeout(()=>{
      	 console.log('Data is loaded and logged in with user :',credentials.username);
      	 resolve(isLoggedIn);
      },2000);
   })
};



const callingPromises = async () => {
	try{
		console.log('promise is startted');
		const credentialFromPromises = await dataPromise(credentials);
		const isValidCredentialInfo = await isValidCredentials(credentials);
		const isTrueLogin = await loginPromise(isValidCredentialInfo);
		const isLoggedIn = await loadPagePromises(isTrueLogin);
	}
	catch(err){
		console.error(err);
	}
} 

callingPromises();

const dataProcess = ({ username, password , isLogin = false }) => {
	console.log('dataProcess');
	console.log(username);
	console.log(password);
	console.log(isLogin);
}



// const callBack = (credentialReturned)=>{
//    console.log('call back ',credentialReturned);
//    dataProcess(credentialReturned)
// }

// dataPromise(credentials,callBack)
// .then((credentials) => {
// 	credentials.isLogin = true; 
// 	callBack(credentials);
// 	loginPromise(credentials)
// })
// .then(isLoggedIn => loadPagePromises(isLoggedIn))
// .catch(error => console.log(error));



// Promise.all -> to combine and run parallel Promise
//Eg :  promise.all([dataPromise,loginPromise]) -> if any one promise is fialed it will failed reject
//all the promises

//Promise.race([dataPromise,loginPromise]) is same like Promise.all, but it will fullfilled atleast one 
//promise is resolved.

//Promise.resolve(1) -> to get resolved promises
//Promise.reject() -> to get Rejected Promises.