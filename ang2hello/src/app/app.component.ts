import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  registrationinformation = {
         name :  'Please enter Name'
  }

  onSubmit(){
  	  console.log('Form is submitted');
  	  console.log(this.registrationinformation);
  }
}
