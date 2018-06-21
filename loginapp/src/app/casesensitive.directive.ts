import { Directive ,Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCasesensitive]'
})
export class CasesensitiveDirective {

  constructor(private el : ElementRef) { 
  }

  @Input('appCasesensitive') casetype: String;

  @HostListener('blur') onBlur() {
  	  let inputVal : String = this.el.nativeElement.value
      console.log('this.casetype : ', this.casetype);
      if(this.casetype === 'upper'){
       		this.el.nativeElement.value = inputVal.toUpperCase();
      }
  }
}
