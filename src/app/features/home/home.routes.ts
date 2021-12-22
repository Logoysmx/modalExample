import { Routes }                 from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';
import { WelcomePageComponent } from './/pages/welcome-page/welcome-page.component';

export const HOME_ROUTER: Routes = [
  {
    path     : '',
    component: HomeSectionComponent,
    children : [
      { path: '', component: HomeSectionComponent },
      { path: 'oneSection', component: WelcomePageComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];