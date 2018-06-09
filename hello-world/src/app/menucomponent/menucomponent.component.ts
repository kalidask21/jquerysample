import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.css']
})
export class MenucomponentComponent {
   
   menus = [
       { menuname : 'Bit Coin', code : 'BTC'},
       { menuname : 'Lite Coin' , code : 'LTC'},
       { menuname : 'Ethereum ', code : 'ETH'},
       { menuname : 'Bitcoin Cash' , code : 'BCH'}
   ]
   viewMode = 'BTC';

   changeMenu(selectedMenu){
        console.log('Menu is '+selectedMenu.code);
        this.viewMode = selectedMenu.code;
   }

}
