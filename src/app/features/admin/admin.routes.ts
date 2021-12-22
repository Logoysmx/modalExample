import { Routes }                 from '@angular/router';
import { AdminIndexComponent } from './admin-index/admin-index.component';

export const ADMIN_ROUTER: Routes = [
  {
    path     : '',
    component: AdminIndexComponent,
    children : [
      { path: '', component: AdminIndexComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];