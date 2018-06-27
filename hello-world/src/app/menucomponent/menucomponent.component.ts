import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.css']
})
export class MenucomponentComponent {
   
   menus = [
       { menuname : 'Main Page', path : 'mainpage'},
       { menuname : 'Contact Page' , path : 'contactpage'},
       { menuname : 'Login Page', path : 'signinpage'},
       { menuname : 'Json Service' , path : 'jsonservicepage'},
       { menuname : 'Football Competations' , path : 'footballcompetationpage'}
   ]
   // viewMode = 'BTC';

   // changeMenu(selectedMenu){
   //      console.log('Menu is '+selectedMenu.code);
   //      this.viewMode = selectedMenu.code;
   // }

   

}
