import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

   caseType:string = 'lower';

   constructor() { }

 // signupForm : new 

  changesensitive($event){
  	console.log($event.target.checked);
  	if($event.target.checked)
  		this.caseType = 'upper'
  	else
  		this.caseType = 'lower'
  }

}
