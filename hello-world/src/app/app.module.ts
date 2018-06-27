import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe} from './course/course.pipe';
import { BootstrappanelComponent } from './bootstrappanel/bootstrappanel.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { HeaderComponent } from './header/header.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent} from './signup-form/signup-form.component';
import { JsonpostComponent } from './jsonpost/jsonpost.component';
import { HttpModule } from '@angular/http';
import { JsonService } from './services/jsonservice.service'
import { DataService } from './services/data.services'
import { FootballService } from './services/footballservice.service'
import { ROUTING } from './app.router';
import { PagenotavailableComponent } from './pagenotavailable/pagenotavailable.component';
import { FootballcompetitionsComponent } from './footballcompetitions/footballcompetitions.component';
import { CompetitiondetailsComponent } from './competitiondetails/competitiondetails.component';
import { TeamsComponent } from './teams/teams.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { LeaguesComponent } from './leagues/leagues.component'


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    BootstrappanelComponent,
    MenucomponentComponent,
    HeaderComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    JsonpostComponent,
    PagenotavailableComponent,
    FootballcompetitionsComponent,
    CompetitiondetailsComponent,
    TeamsComponent,
    FixturesComponent,
    LeaguesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [
     DataService,
     JsonService,
     FootballService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
