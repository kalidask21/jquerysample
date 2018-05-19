/**
 * http://usejsdoc.org/
 */

//Object Destructuring to write minimal code

// ES5
var expense = {
	type : 'Business',
	amount : 40 
}

var printexp = ({type,amount}) => {
	console.log(`your doing ${type} for the amount of ${amount}`);
}

//var type = expense.type; // redundant code 
//var amount = expense.amount;

//console.log(type);
//console.log(amount);

// ES6 way

const {type,amount} = expense; // must be same name as property name in object

//console.log(type);
printexp(expense);


const companies = [
	'Apple',
	'IBM',
	'HP',
	'Amazon',
	'Dell'
];

const [name1,name2,...name3] = companies;
console.log(name1);
console.log(name2);
console.log(name3);


const names= [
	{name :'Kalidas' , age:30},
	{name :'Kalidas1' , age:31},
	{name :'Kalidas2' , age:32}
];


const [{name,age}] = names;

console.log(name);
console.log(age);

