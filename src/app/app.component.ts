import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AppStartSplashComponent } from './components/app-start-splash/app-start-splash.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public mainMenu: Array<any> = [
    { title: 'Home', url: '/home', icon: 'home', toolTip: 'Home' },
    { title: 'Groups', url: '/groups', icon: 'albums', toolTip: 'Groups' },
    { title: 'Team Profile', url: '/team-profile', icon: 'people', toolTip: 'Profile' },
  ];
  public isAuthenticated = false;
  constructor( public navCtrl: NavController, private modalCtrl: ModalController
    ) {
    this.initStart();
  }

  async ngOnInit() {
  }

  setRoot(page) {
    this.navCtrl.navigateRoot(`/${page}`);
  }

  logout(){
  }

  async initStart() {
    const portalLoad = await this.modalCtrl.create({
      component: AppStartSplashComponent,
      cssClass: 'app-start-loader',
      showBackdrop: false,
      animated: false
    });
    return await portalLoad.present();
  }
}
