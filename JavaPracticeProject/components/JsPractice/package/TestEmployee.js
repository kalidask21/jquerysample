class Employee  {
    employeeID = "123123";
   
    employeeInfo = () => {
        console.log(" -- "+this.employeeID);      
    }

}


var p = new Employee();
p.employeeInfo();