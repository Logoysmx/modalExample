import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { CORE_ROUTER }          from './core.routes';
import { HomeComponent }        from './pages/home/home.component';
import { SharedModule }         from '../shared/shared.module';
import { HttpClientModule }     from '@angular/common/http';

@NgModule( {
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot( CORE_ROUTER, { useHash: true } ),
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
} )
export class CoreModule {}
