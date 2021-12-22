import { CommonModule }              from '@angular/common';
import { HttpClientModule }          from '@angular/common/http';
import { NgModule }                  from '@angular/core';
import { ReactiveFormsModule }       from '@angular/forms';
import { RouterModule }              from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule }              from '../../shared/shared.module';

import { HOME_ROUTER }          from './home.routes';


import { FormsModule } from '@angular/forms';


import { HomeSectionComponent } from './home-section/home-section.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';


@NgModule( {
  declarations: [
    HomeSectionComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( HOME_ROUTER  ),
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule
  ]
} )
export class HomeModule {}
