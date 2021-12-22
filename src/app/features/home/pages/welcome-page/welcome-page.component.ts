import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  myModal = false;

  constructor() {}

  ngOnInit(): void {
  }  

  mostrarModal() {
    this.myModal = true;
  }

  cerrarModal(e: any) {
    this.myModal = e;
  }


}