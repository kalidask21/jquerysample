import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

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
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
     CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
