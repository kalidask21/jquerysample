import { Component, OnInit } from '@angular/core';
import { Form, FormGroup,FormControl, FormBuilder,Validators,Validator} from '@angular/forms';
import { TextBoxCustomValidator } from '../TextBoxCustomValidator';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
    loginForm;
    showPass:boolean=false;
    constructor(fb : FormBuilder) {
	    this.loginForm = fb.group({
	        username : ["",[
	         	Validators.required,
	         	Validators.minLength(7),
	         	TextBoxCustomValidator.userExist]],
	        password : ["",[
	         	Validators.required,
	         	Validators.minLength(4),
	         	TextBoxCustomValidator.passExist]], 
	    	},
	    {
	    	Validator : TextBoxCustomValidator.matchPassword // your validation method
	    }
	    );
	}
  
    toggleShowPass($event){
         this.showPass = $event.target.checked;
         console.log(this.showPass);
    }
    
    get username(){
    	return this.loginForm.get("username");
    }

    get password(){
    	return this.loginForm.get("password");
    }

}
