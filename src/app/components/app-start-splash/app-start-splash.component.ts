import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-app-start-splash',
  templateUrl: './app-start-splash.component.html',
  styleUrls: ['./app-start-splash.component.scss'],
})
export class AppStartSplashComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.modalCtrl.dismiss();
    }, 3000);
  }

}
