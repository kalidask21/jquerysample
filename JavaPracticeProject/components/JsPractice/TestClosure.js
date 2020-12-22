
// Modul Pattern Example in JS
let foo = (function(){
   
    var test = {
       message :  "Hii"
    }
    return {
        bar : function(){
            console.log(test.message);
        }
    }


})();

foo.bar();


let emp1 = {
    name : 'Kalidas',
    location : 'Cali',
    age : '29',
    skills : 'Software Developer',
    salary : '10K'
};

let person = function(emp1){
    let empObj = emp1;
    return { 
       publicAPI :function(){
            console.log(empObj.name)
            console.log(empObj.location)
        
    }} 
}

person(emp1).publicAPI();