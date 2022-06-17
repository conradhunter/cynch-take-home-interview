import { Component, OnInit} from '@angular/core';
import { NavController, AlertController, ModalController, LoadingController } from '@ionic/angular';
import { PartnerService } from '../../services/partner/partner.service';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.page.html',
  styleUrls: ['./team-profile.page.scss'],
})
export class TeamProfilePage implements OnInit {
  public partnerDetails: any;
  public team: any;
  public businessesCount: number;
  public isAuthenticated = true;
  public userData: any;
  public licensesCount: number;
  private accessToken: any;
  constructor(public navCtrl: NavController, public partnerService: PartnerService, public alertController: AlertController, private loadCtrl: LoadingController, private modalCtrl: ModalController) {

  }


 async ngOnInit(): Promise<void> {
   this.getpartnerDetails();
  }

  ionViewWillEnter() {
  }

  async getpartnerDetails(): Promise<void> {
    const partner = await this.partnerService.getPartnerDetail();
    if(partner && this.isAuthenticated){
      this.partnerDetails = partner;
      this.getTeamDetails(partner.users);
      this.getBusinessesCount();
    } else {
      this.alertTryagain();
    }
  }

  async getTeamDetails(users): Promise<any> {
    const teamData = this.partnerDetails.partnerTeam;
    this.team = teamData;

    //console.log(this.team);
  }

  async getBusinessesCount(): Promise<void> {
    const data = await this.partnerService.getBusinesses();
    //console.log(data);
    if(data) {
      this.businessesCount = data.length;
    }
  }




  async alertTryagain() {
    const alert = await this.alertController.create({
      cssClass: 'tryagain-alert',
      header: 'Oh snap!',
      message: 'An error occurred while retrieving data.',
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          handler: async () => {
            this.navCtrl.navigateRoot(`home`);
          }
        },
        {
          text: 'Try again',
          handler: async () => {
            await alert.dismiss();
            this.getpartnerDetails();
          }
        }
      ]
    });

  await alert.present();
  }

  setRoot(page: string) {
    this.navCtrl.navigateRoot(`/${page}`);
  }

  async addMember() {
  }

  async addedMemberAlert() {
    const addedMember = await this.loadCtrl.create({
      spinner: null,
      cssClass: 'my-custom-class',
      message: 'Member Added',
      duration: 3000
    });
    await addedMember.present();
    addedMember.onDidDismiss().then(() => {
      this.team = [];
      this.getpartnerDetails();
      return false;
    });
  }

  async updateMemberDataError() {
    const updateError = await this.loadCtrl.create({
      spinner: null,
      cssClass: 'my-custom-class',
      message: 'Sorry, Could not update at this time.',
      duration: 3000
    });
    await updateError.present();
  }

  async updateMemberAlert() {
    const update = await this.loadCtrl.create({
      spinner: null,
      cssClass: 'my-custom-class',
      message: 'Member updated<br>Please wait...',
      duration: 3000
    });
    await update.present();
    update.onDidDismiss().then(() => {
      this.getpartnerDetails();
      return false;
    });
  }

  async deleteMemberAlert() {
    const deleteMember = await this.loadCtrl.create({
      spinner: null,
      cssClass: 'my-custom-class',
      message: 'Member deleted<br>Please wait...',
      duration: 3000
    });
    await deleteMember.present();
    deleteMember.onDidDismiss().then(() => {
      this.getpartnerDetails();
      return false;
    });
  }

  async deleteMember(uid: string, fName: string, lName: string) {

  }
}
