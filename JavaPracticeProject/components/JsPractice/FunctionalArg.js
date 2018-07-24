/**
 * http://usejsdoc.org/
 */
// Default functiona argumet 

// Old Way

var method = function(args1, args2) {
  args1 = args1 ? 'Val1' : args1;
  args2 = args2 ? 'Val2' : args2;
  console.log(args1);
  console.log(args2);
}

method();
method('12');
method('22', '22');

// 
//ES^ Ways

var method2 = function(args1 = 'Val1', args2 = 'Val2') {
  console.log(args1);
  console.log(args2);
}
console.log('ES6 -------');
method2();
method2('12');
method2('22', '22');
