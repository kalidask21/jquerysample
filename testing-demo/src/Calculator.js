const add = (in1,in2) =>{
   validator(in1,in2);
   return in1 + in2;
}

const sub = (in1,in2) =>{
   validator(in1,in2);	
   return in1 - in2;
}

const multi = (in1,in2) =>{
   validator(in1,in2);	
   return in1 * in2;
}

const div = (in1,in2) =>{
   validator(in1,in2);
   return in1 / in2;
}

const validator = (in1,in2) => {
   if(in1 < 0 || in2 < 0){
        throw new Error('Its less than positive integer an number');
   } 
}


module.exports = {
   add,
   sub,
   multi,
   div
}