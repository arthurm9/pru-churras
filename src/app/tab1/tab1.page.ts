import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cara = 'assets/cara.png'
  coroa = 'assets/coroa.png'
  info = 'Clique no botão para jogar!'
  logo = 'assets/logo.png'
  image = this.throwCoin();

  constructor() {}

  throwCoin() {
    if(Math.random() < 0.5) {
      this.image = this.cara;
      this.info = 'Cara!';
    } else {
      this.image = this.coroa;
      this.info = 'Coroa!';
    }
  }
}
