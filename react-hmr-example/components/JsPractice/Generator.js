/**
 * http://usejsdoc.org/
 */


// Small Example

function* colors(){
	yield 'red';
	yield 'blue';
	yield 'black';
	
}

var color = colors();
console.log(color.next());
console.log(color.next());
console.log(color.next());
console.log(color.next());
console.log(color.next());
console.log(color.next());