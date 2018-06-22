import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.services';
import { SummaryPipe} from './course/course.pipe';
import { BootstrappanelComponent } from './bootstrappanel/bootstrappanel.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { HeaderComponent } from './header/header.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { JsonpostComponent } from './jsonpost/jsonpost.component';
import { HttpModule } from '@angular/http';
import { JsonService} from './services/jsonservice.service'



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    BootstrappanelComponent,
    MenucomponentComponent,
    HeaderComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    JsonpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
     CoursesService,
     JsonService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
