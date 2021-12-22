import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import {RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule( {
  declarations: [  
    ModalComponent
  ],
  exports: [
      
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ]
} )
export class SharedModule {}
