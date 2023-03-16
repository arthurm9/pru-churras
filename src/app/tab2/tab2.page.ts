import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  value = 1;
  wePoints = 0;
  theyPoints = 0;
  weWins = 0;
  theyWins = 0;

  changeValue(value:number) {
    if (this.value < value) {
      this.value = value;
    }
  }

  increaseWePoints() {
    this.wePoints += this.value;
    if(this.wePoints === 12) {
      this.weWins += 1;
      this.theyPoints = 0;
      this.wePoints = 0;
      this.value = 1;
    }
  }

  increaseTheyPoints() {
    this.theyPoints += this.value;
    if(this.theyPoints >= 12) {
      this.theyWins += 1;
      this.theyPoints = 0;
      this.wePoints = 0;
      this.value = 1;
    }
  }

  decreaseWePoints() {
    this.wePoints -= this.value;
  }

  decreaseTheyPoints() {
    this.theyPoints -= this.value;
  }

  clearValues() {
    this.value = 1;
    this.wePoints = 0;
    this.theyPoints = 0;
    this.weWins = 0;
    this.theyWins = 0;
  }
}
