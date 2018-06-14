import { Directive , HostListener ,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el : ElementRef ) { }

  @Input('appInputFormat') formatType;

  @HostListener('blur') onBlur(){
         let inputVal : String = this.el.nativeElement.value
         console.log(this.formatType);
         console.log(inputVal);
         if(this.formatType === 'up'){
         	this.el.nativeElement.value = inputVal.toUpperCase();
         }else if(this.formatType === 'low'){
            this.el.nativeElement.value = inputVal.toLowerCase();
         }
  }

}
