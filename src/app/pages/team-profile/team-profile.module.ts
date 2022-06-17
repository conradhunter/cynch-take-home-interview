import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamProfilePageRoutingModule } from './team-profile-routing.module';

import { TeamProfilePage } from './team-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamProfilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TeamProfilePage]
})
export class TeamProfilePageModule {}
