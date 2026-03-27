import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'books',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'superadmin',
    loadComponent: () => import('./pages/superadmin/superadmin.component').then(m => m.SuperadminComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
