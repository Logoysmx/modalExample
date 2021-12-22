import { CommonModule }              from '@angular/common';
import { HttpClientModule }          from '@angular/common/http';
import { NgModule }                  from '@angular/core';
import { ReactiveFormsModule }       from '@angular/forms';
import { RouterModule }              from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule }              from '../../shared/shared.module';

import { ADMIN_ROUTER }          from './admin.routes';


import { FormsModule } from '@angular/forms';


import { AdminIndexComponent } from './admin-index/admin-index.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';


@NgModule( {
  declarations: [
    AdminIndexComponent,
    ModalPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( ADMIN_ROUTER ),
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule
  ]
} )
export class AdminModule {}
