import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(public menuCtrl: MenuController,public alertCtrl: AlertController) { }

  ngOnInit(): void {
    this.menuCtrl.enable(false, 'mainSideMenu');
  }

  async showAlert() {  
    const alert = await this.alertCtrl.create({      
      message: 'Oops, this button does not work.',  
      buttons: ['Dismiss']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  
}  



  
  



