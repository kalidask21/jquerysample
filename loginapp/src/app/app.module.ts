import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SignupComponent } from './signup/signup.component';
import { CasesensitiveDirective } from './casesensitive.directive';
import { SpecialcasevalidatorDirective } from './specialcasevalidator.directive';
import { DateformatterDirective } from './dateformatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    MenuComponent,
    ChangepasswordComponent,
    SignupComponent,
    CasesensitiveDirective,
    SpecialcasevalidatorDirective,
    DateformatterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
