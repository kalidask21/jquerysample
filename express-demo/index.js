const express = require('express');
const courses = require('./DataConstants');
const { LoginFilter } =  require('./middleware/LoginValidatorFilter');
const { LoginOAuth } =  require('./middleware/OAuthGenerator');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true }));

//app.use(Auth);

console.log(courses);
//console.log(app);

app.get('/',(req,res) =>{
    res.send('Hi welcome to Express Js');
})

app.get('/api/courses',LoginFilter,(req,res) =>{
	res.send(courses());
})

app.post('/api/oauth',(req,res) =>{
	return LoginOAuth(req,res);
})

app.get('/api/courses/:id',LoginFilter,(req,res) =>{
	const data = courses().find((c) =>{
		return c.id === parseInt(req.params.id);
	})

    if(data)
    	res.send(data);
    else
    	res.status(400).send('Data is not available');
    	
})

app.get('/api/courses/:year/:month',LoginFilter,(req,res) =>{
	let responeObj = {};
	responeObj.message = `Below are the record for year ${req.params.year} and month is ${req.params.month}`;
    if(req.query.sortBy)
		responeObj.sortBy = req.query.sortBy;
	responeObj.param = req.params;
	responeObj.query = req.query;
    res.send(responeObj);
})


// Set in windows using set path=5000
const port  = process.env.PORT || 3003;
app.listen(port,() =>{
	console.log(`listening on port ${port} `);
})