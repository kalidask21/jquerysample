// cretae 
////MAP -- FOREACH -----
var input = {
	a : 4,
	b : 10
}

var calculator = function() {
	add = function() {
		return this.a + this.b;
	},
	sub = function() {
		return this.a - this.b;
	}
}

calculator.call(this, input);
//console.log(calculator);
//console.log('Add is '+calculator.add());

var cars = [
	{
		model : 'BMW 539',
		year : 2009,
		price : 10000
	},
	{
		model : 'AUDI A2',
		year : 2009,
		price : 20000
	},
	{
		model : 'AUDI A3',
		year : 2009,
		price : 16000
	},
	{
		model : 'AUDI A4',
		year : 2009,
		price : 35000
	},
	{
		model : 'AUDI A6',
		year : 2009,
		price : 45000
	},
	{
		model : 'BMW 320',
		year : 2009,
		price : 18000
	},
	{
		model : 'BMW 520',
		year : 2009,
		price : 15000
	}
];


var carsPricetype = cars.map(function(car) {
	if (car.price > 10000) {
		car.pricetype = 'Costly';
	} else {
		car.pricetype = 'Cheap';
	}
	return car;
});


function showMessage(arrs) {
	arrs.forEach(function(arr) {
		console.log('Model is ' + arr.model + ' Price type is ' + arr.pricetype);
	})
}

//showMessage(cars);
///showMessage(carsPricetype);


//FILTERS Example//

var numbers = [ 15, 25, 35, 45, 55, 65, 75, 85, 95 ];

var filteredNumbers = numbers.filter(function(number) {
	return number > 50;
});


var users = [
	{
		id : 1,
		admin : true
	},
	{
		id : 2,
		admin : false
	},
	{
		id : 3,
		admin : false
	},
	{
		id : 4,
		admin : false
	},
	{
		id : 5,
		admin : true
	},
];

var hasAccess = function(user) {
	console.log('filter user' + user.admin);
	return user.admin;
}

var filteredUsers = users.filter(hasAccess);


//Ends//

// FIND HELPER ////
var hasAccess = function(user) {
	console.log('find user' + user.admin);
	return user.admin;
}

var findUsers = users.find(hasAccess);
console.log(findUsers);

//End //

// EVERY is kind of && operator between the values , 
 //SOME is kind of || operatior between the values ////


var everyisGreather15 = numbers.every(function(number) {
	return number>15;
})

var someisGreather15 = numbers.some(function(number) {
	return number>15;
})

console.log('Every is >15 '+ everyisGreather15);
console.log('some is >15 ' + someisGreather15);


// REDUCE //

///	