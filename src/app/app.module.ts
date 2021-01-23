import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HomeBoardsComponent } from './_components/home/home-boards/home-boards.component';
import { HomeDishesComponent } from './_components/home/home-dishes/home-dishes.component';
import { ResetPasswordComponent } from './_components/login/reset-password/reset-password.component';
import { SignInComponent } from './_components/login/sign-in/sign-in.component';
import { SignUpComponent } from './_components/login/sign-up/sign-up.component';
import { InfosFormComponent } from './_components/profile/infos-form/infos-form.component';
import { ProfileOrdersComponent } from './_components/profile/profile-orders/profile-orders.component';
import { HomeComponent } from './_pages/home/home.component';
import { TrayComponent } from './_components/tray/tray.component';
import { LoginComponent } from './_pages/login/login.component';
import { ProfileComponent } from './_pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeBoardsComponent,
    HomeDishesComponent,
    ResetPasswordComponent,
    SignInComponent,
    SignUpComponent,
    InfosFormComponent,
    ProfileOrdersComponent,
    TrayComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
