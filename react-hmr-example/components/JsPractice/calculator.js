/**
 * http://usejsdoc.org/
 */

var input = {
	a:4,
	b:7
}

var calculator = {
	add : function(){
		return this.a+this.b;
	},
	sub : function(){
		return this.a-this.b;
	},
	multi : function(){
		return this.a*this.b;
	}
	
}

var add = calculator.add.call(input)
console.log(add);
var sub = calculator.sub.bind(input)
console.log(sub());

var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var sayHello = function(){
    console.log('Hello, ' + this.name);
};

var sayGoodbye = function(){
    console.log('Goodbye, ' + this.name);
};

sayHello.call(person1);
sayGoodbye.call(person2);