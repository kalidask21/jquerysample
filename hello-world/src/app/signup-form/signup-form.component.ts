import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
	contactForm = new FormGroup({
		username : new FormControl('',[Validators.required,Validators.minLength(4)]),
		password : new FormControl('',[Validators.required,Validators.minLength(4)])
	});

	get username(){
		return this.contactForm.get('username');
	}

	get password(){
		return this.contactForm.get('password');
	}
}
