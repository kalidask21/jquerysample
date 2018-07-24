/**
 * http://usejsdoc.org/
 */

class EmployeeDesignation{
	constructor({designation,country}){
		this.designation = designation;
		this.country = country;
	}
	
	paySalary(){
		return 'Paid Monthly Salary for '+ this.designation +' , Location is '+this.country;
	}
}

class Employee extends EmployeeDesignation{
	constructor({fname,lname,designation,country}){
		super({designation,country});
		this.fname = fname;
	    this.lname = lname;
	}
	callInfo(){
		console.log('Mr '+this.fname +' - ' + this.lname);
		return this.paySalary();
	}
	
}


const Employeeobj = new Employee({fname :'KK',lname :'K21',designation:'SSE',country:'USA'});
console.log(Employeeobj.callInfo());





