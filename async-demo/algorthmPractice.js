const permutation = (input,prefix) =>{
  // console.log('input : '+input + ' prefix : '+prefix);	
  //  console.log('input is True  : ',input.length == 0);	
   if(input.length == 0){
   	   console.log(prefix);
   }
   else{
   	 // console.log(input)
      for(let i = 0; i<input.length;i++){
      	console.log('input.length : ',input.length + ' , i ' + i);	
      	let rem = input.substring(0,i) + input.substring(i+1);
      	permutation(rem, prefix + input.charAt(i));
      }

   }
}

const fib = (n) => {
	 if(n <= 0) 
	 	return 0;
	 else if(n == 1) 
	 	return 1;
     else
     {
    	console.log('n : ',n);
    	let i= 0;
    	i =  i + fib(n-1) + fib(n-2);
    	console.log(' i : ',i);
    	return i;
     }	

}


//permutation('abc','');
fib(6);