import { Routes } from '@angular/router';

export const CORE_ROUTER: Routes = [
  {
    path        : 'home',
    loadChildren: () => import('../features/home/home.module').then( m => m.HomeModule )
  },
  {
    path        : 'admin',
    loadChildren: () => import('../features/admin/admin.module').then( m => m.AdminModule )
  },    
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
