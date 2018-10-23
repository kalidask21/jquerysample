const URL = "http://www.omdbapi.com/?apikey=84d8c65";
let fetch = require('node-fetch');

const getMovie = (search) =>{
	console.log('Will Call movie api and return');
	const query = "&t="+search;
	console.log(URL+query);
	let respone;
	fetch(URL+query).then((res) => {
    	respone = res.json();
    });
    console.log(respone);
	return true;
}

module.exports = {
	getMovie
}