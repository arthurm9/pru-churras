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
      cssClass: 'alertCustomCss',
      message: message,
      buttons: [
        {
          text: 'Ok',
          cssClass: 'confirmCustomCss',
        }
        ],
    });
    await alert.present();
  }

  async showToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Os dados foram limpos.',
      cssClass: 'custom-toast',
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

  buttonState1 = 'outline';
  buttonState2 = 'solid';
  buttonState3 = 'solid';
  buttonState4 = 'solid';
  buttonState5 = 'solid';

  buttonIds = ['button-1', 'button-2', 'button-3', 'button-4', 'button-5'];

  resetButtonState() {
    this.buttonState1 = 'solid';
    this.buttonState2 = 'solid';
    this.buttonState3 = 'solid';
    this.buttonState4 = 'solid';
    this.buttonState5 = 'solid';
  }

  changeValue(value: number) {
    if (this.value < value) {
      this.value = value;
      this.resetButtonState();
      if (value === 1) {
        this.buttonState1 = 'outline';
      } else if (value === 3) {
        this.buttonState2 = 'outline';
        this.disableOtherButtons('button-2');
      } else if (value === 6) {
        this.buttonState3 = 'outline';
        this.disableOtherButtons('button-3');
      } else if (value === 9) {
        this.buttonState4 = 'outline';
        this.disableOtherButtons('button-4');
      } else if (value === 12) {
        this.buttonState5 = 'outline';
        this.disableOtherButtons('button-5');
      }
    } else {
      this.enableButtons();
      this.resetButtonState();
      this.value = 1;
    }
  }

  disableOtherButtons(clickedButtonId: string) {
    this.buttonIds.forEach((buttonId) => {
      if (buttonId < clickedButtonId) {
        const buttonElement = document.getElementById(buttonId);
        if (buttonElement) {
          buttonElement.setAttribute('disabled', '');
        }
      }
    });
  }

  enableButtons() {
    this.buttonIds.forEach((buttonId) => {
      const buttonElement = document.getElementById(buttonId);
      if (buttonElement) {
        buttonElement.setAttribute('disabled', 'false');
      }
    });
  };

  increaseWePoints() {
    this.wePoints += this.value;
    this.value = 1;
    this.enableButtons();
    this.resetButtonState();
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
    this.enableButtons();
    this.resetButtonState();
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
    this.enableButtons();
    this.resetButtonState();
    if (this.wePoints < 0) {
      this.wePoints = 0;
    }
  }

  decreaseTheyPoints() {
    this.theyPoints -= this.value;
    this.value = 1;
    this.enableButtons();
    this.resetButtonState();
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
    this.resetButtonState();
    this.enableButtons();
  }
}
