import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name : 'summary'
})

export class SummaryPipe implements PipeTransform{
       transform(value :String,args: any){
             if(!value){
             	return null;
             }
             console.log(value);
             console.log(args);
             return value.substring(0,50) + '...';

       }
   
}