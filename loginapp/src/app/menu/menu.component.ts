import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  menus = [
       { menuname : 'Login Page', code : 'login'},
       { menuname : 'Update Password Page' , code : 'updatepassword'},
       { menuname : 'Signup Page', code : 'signup'},
       { menuname : 'Users List Page', code : 'users'}
       
   ]
   viewMode = 'login';

   changeMenu(selectedMenu){
        console.log('Menu is '+selectedMenu.code);
        this.viewMode = selectedMenu.code;
   }

   

}
