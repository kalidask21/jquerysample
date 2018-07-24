/**
 * http://usejsdoc.org/
 */

// Rest operator

function addNum(...num){
	console.log(num.length);
	console.log(num);
}

addNum(1,2,1,2,1);


// Spread...

const name= ['kak','fff',2222];
const name1 = ['K21','lkl',true];
const name2 = ['H21','Kkl',12121];

console.log([...name,...name1]);
console.log([...name,...name1,...name2]);
console.log(['final',...name,...name1,...name2]);


//Eg :
	
	
function validateShop(...items){
	if(items.indexOf('apple') < 0){
		return ['apple',...items];
	}else{
		return items;
	}
}

console.log(validateShop('banana','milk','egg'));
console.log(validateShop('banana','milk','egg','apple'));
