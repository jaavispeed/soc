import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('../app/components/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
