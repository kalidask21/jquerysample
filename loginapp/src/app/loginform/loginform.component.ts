import { Component, OnInit } from '@angular/core';
import { Form, FormGroup,FormControl, FormBuilder,Validators,Validator} from '@angular/forms';
import { LoginCustomValidator } from '../loginCustomValidator';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
    loginForm;
    constructor(fb : FormBuilder) {
	    this.loginForm = fb.group({
	        username : ["",[
	         	Validators.required,
	         	Validators.minLength(7),
	         	LoginCustomValidator.userExist]],
	        password : ["",[
	         	Validators.required,
	         	Validators.minLength(4),
	         	LoginCustomValidator.passExist]], 
	    	},
	    {
	    	Validator : LoginCustomValidator.matchPassword // your validation method
	    }
	    );
	}

    get username(){
    	return this.loginForm.get("username");
    }

    get password(){
    	return this.loginForm.get("password");
    }

}
