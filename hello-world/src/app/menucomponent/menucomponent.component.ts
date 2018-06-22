import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.css']
})
export class MenucomponentComponent {
   
   menus = [
       { menuname : 'Main Page', code : 'main'},
       { menuname : 'Form Page' , code : 'form'},
       { menuname : 'Signup Page', code : 'signup'},
       { menuname : 'Json Service' , code : 'jsonservice'}
   ]
   viewMode = 'BTC';

   changeMenu(selectedMenu){
        console.log('Menu is '+selectedMenu.code);
        this.viewMode = selectedMenu.code;
   }

   

}
