import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController, private toastController: ToastController) { }

  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['Ok'],
    });
    await alert.present();
  }

  async showToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Os dados foram limpos.',
      duration: 1000,
      position: position,
      icon: 'warning'
    });

    await toast.present();
  }

  value = 1;
  wePoints = 0;
  theyPoints = 0;
  weWins = 0;
  theyWins = 0;

  changeValue(value: number) {
    if (this.value < value) {
      this.value = value;
    }
  }

  increaseWePoints() {
    this.wePoints += this.value;
    this.value = 1;
    if (this.wePoints > 12 || this.wePoints === 12) {
      this.weWins += 1;
      this.theyPoints = 0;
      this.wePoints = 0;
      this.value = 1;
      this.showAlert("VENCEDOR!", "O Time 1 Venceu.");
    }
  }

  increaseTheyPoints() {
    this.theyPoints += this.value;
    this.value = 1;
    if (this.theyPoints > 12 || this.theyPoints === 12) {
      this.theyWins += 1;
      this.theyPoints = 0;
      this.wePoints = 0;
      this.value = 1;
      this.showAlert("VENCEDOR!", "O Time 2 Venceu.");
    }
  }

  decreaseWePoints() {
    this.wePoints -= this.value;
    this.value = 1;
    if (this.wePoints < 0) {
      this.wePoints = 0;
    }
  }

  decreaseTheyPoints() {
    this.theyPoints -= this.value;
    this.value = 1;
    if (this.theyPoints < 0) {
      this.theyPoints = 0;
    }
  }

  clearValues() {
    this.value = 1;
    this.wePoints = 0;
    this.theyPoints = 0;
    this.weWins = 0;
    this.theyWins = 0;
    this.showToast('bottom');
  }
}
