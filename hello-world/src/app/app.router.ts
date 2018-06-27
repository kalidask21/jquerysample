import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent} from './signup-form/signup-form.component';
import { JsonpostComponent } from './jsonpost/jsonpost.component';
import { PagenotavailableComponent } from './pagenotavailable/pagenotavailable.component';
import { FootballcompetitionsComponent } from './footballcompetitions/footballcompetitions.component';
import { CompetitiondetailsComponent } from './competitiondetails/competitiondetails.component'
 
export const AppRoutes: Routes = [
    {
          path : 'signinpage',
          component : SignupFormComponent

    },
    {
          path : 'jsonservicepage',
          component : JsonpostComponent

    },
    {
          path : 'contactpage',
          component : ContactFormComponent

    },
    {
          path : 'footballcompetationpage',
          component : FootballcompetitionsComponent

    },
    {
          path : 'footballcompetationpage/competitiondetails/:id',
          component : CompetitiondetailsComponent

    },
    {
          path : '**',
          component : PagenotavailableComponent

    }
  ];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);