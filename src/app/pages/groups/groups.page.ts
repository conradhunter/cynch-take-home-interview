import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { PartnerService } from '../../services/partner/partner.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  public groupData: Array<any>;
  public isAuthenticated = true;
  private accessToken: any;
  constructor(public partnerService: PartnerService, public menuCtrl: MenuController, public navCtrl: NavController) {

   }

   async ngOnInit() {
    
  }

  ionViewWillEnter() {
    if (this.isAuthenticated) {
      this.menuCtrl.enable(true, 'mainSideMenu');
      this.getGroupsData();
    }
  }

  async getGroupsData(): Promise<void> {
    const arr: Array<any> = [];
    const groupData = await this.partnerService.getGroupsCollection();
    //console.log(groupData);
    this.groupData = groupData;
  }

  groupSummary(groupId: string) {
    this.navCtrl.navigateForward(`/group-profile/${groupId}`);
  }

  setRoot(page: string) {
    this.navCtrl.navigateRoot(`/${page}`);
  }

}
