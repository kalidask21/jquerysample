import { AbstractControl ,FormGroup} from '@angular/forms';

export class TextBoxCustomValidator {
        static userExist(control : AbstractControl){
        	  if(control.value == 'kali') {
              	   return  { exist : true };
              }
			  return null;
        }

        static passExist(control : AbstractControl){
        	if(control.value == 'kali') {
              	   return  { exist : true };
             }
			 return null;
        }

        static matchPassword(control : AbstractControl){
        	console.log(control.get('username').value);
        	console.log(control.get('password').value);
            if(control.get('username').value === control.get('password').value){
            	control.get('password').setErrors( { equal: true} );
            }

			return null;
        }


}


