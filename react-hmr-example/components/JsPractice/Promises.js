/**
 * http://usejsdoc.org/
 */


const promise = new Promise((resolve,reject) =>{
	//resolve();
	reject();
});

promise.then(() =>{
	console.log('I am done');
}).then(()=>{
	console.log('Hey I am also done');
})


promise.catch(() =>{
	console.log('I am done - catching');
}).catch(()=>{
	console.log('Hey I am also done - catching');
})


//promise();


//Fetch is an object is available in the browser.

const url ="https://jsonplaceholder.typicode.com/posts/" ;

fetch("https://jsonplaceholder.typicode.com/posts/").then((response) =>{
	console.log(response.json());
});