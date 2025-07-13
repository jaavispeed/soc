import { Routes } from '@angular/router';
import LandingPageComponent from './landing/pages/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: 'Soc',
    component: LandingPageComponent,
  },
  {
    path: '**',
    redirectTo: 'Soc',
    pathMatch: 'full',
  }
];
