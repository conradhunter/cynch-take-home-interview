import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStartSplashComponent } from '../app/components/app-start-splash/app-start-splash.component';

@NgModule({
  declarations: [AppComponent, AppStartSplashComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (userService: UserService) => () => userService.initiate(),
    //   deps: [UserService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
