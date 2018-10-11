let i = 0;
function recursive(id){
	if(id>=0){
		nextId = --id;
		console.log(id);
		i = i + nextId; 
		recursive(nextId);
	}
}

recursive(10);
console.log('sum is ',i);