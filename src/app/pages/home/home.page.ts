import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MenuController, NavController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { PartnerService } from '../../services/partner/partner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public businesses: any;
  public partnerDetails: any;
  public licenses: number;
  public isAuthenticated = true;
  public userData: any;
  public loaderOn = false;
  public partnerId: string;
  public noBusinessesFound = false;
  private accessToken: any;
  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public alertCtrl: AlertController, public partnerService: PartnerService, public loadCtrl: LoadingController, public toastCtrl: ToastController, private modalCtrl: ModalController) {
    Chart.register(...registerables);
   }

  async ngOnInit(): Promise<void> {
    this.getBusinesses();
  }

  ionViewWillEnter() {
    if (this.isAuthenticated) {
      this.menuCtrl.enable(true, 'mainSideMenu');
    }
  }

  ngOnDestroy() {
  }

  async getPartnerId() {

  }

  async getBusinesses(): Promise<void> {
    const data: any = await this.partnerService.getBusinesses();
    //console.log(data);
    this.businesses = data;
  }

  async getPartnerInfo(): Promise<void> {
    const details = await this.partnerService.getPartnerDetail();
    if(details) {
      this.partnerDetails = details;
    } else {
      this.partnerDetails = [];
    }
  }

  businessDetails(businessId: string) {
    this.navCtrl.navigateForward(`business-profile/${businessId}`);
  }

  async alertTryagain() {
    const alert = await this.alertCtrl.create({
      cssClass: 'tryagain-alert',
      header: 'Oh snap!',
      message: 'An error occurred while retrieving data.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Try again',
          handler: async () => {
            await alert.dismiss();
            this.getPartnerInfo();
            this.getBusinesses();
          }
        }
      ]
    });

    await alert.present();
  }

  async partnerRetreivalError() {
    const alert = await this.alertCtrl.create({
      cssClass: 'tryagain-alert',
      header: 'Oh snap!',
      message: 'An error occurred while retreiving your data.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Try again',
          handler: async () => {
            await alert.dismiss();
            this.getPartnerId();
          }
        }
      ]
    });

    await alert.present();
  }

  async somethingWentWrong() {
    const alert = await this.alertCtrl.create({
      cssClass: 'tryagain-alert',
      header: 'Oh snap!',
      message: 'An error occurred while retrieving data.',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async addBusiness() {
  }

  async addBusinessDataError() {
    const updateError = await this.loadCtrl.create({
      spinner: null,
      cssClass: 'my-custom-class',
      message: 'Sorry, could not add a business.',
      duration: 3000
    });
    await updateError.present();
  }

  async addBusinessSuccess() {
    const update = await this.loadCtrl.create({
      spinner: null,
      cssClass: 'my-custom-class',
      message: 'Business added<br>Please wait...',
      duration: 3000
    });
    await update.present();
    update.onDidDismiss().then(() => {
      location.reload();
      return false;
    });
  }

  async deleteBusiness(businessID: string) {
  }
}
