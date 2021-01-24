import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { User } from 'src/app/_models/user';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';
import { TrayComponent } from '../tray/tray.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  user: User;
  picPath: string;

  constructor(
    private menu: MenuController, 
    private modal: ModalController,
    private service: UserService,
    private tokenService: TokenService,
    private router: Router) { 
      this.tokenService.tokenChange.subscribe(_ => this.ngOnInit());
    }

  ngOnInit() {
    console.log("initialisation navbar");
    this.user = this.service.getCurrentUser();
    if (this.user) {
      this.picPath = `../../../../assets/images/avatars/${this.user.imageId}.png`;
    }
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/home']);
  }

  openMenu() {
    this.menu.open('end');
  }

  async openModal() {
    const modal = await this.modal.create({
      component: TrayComponent
    });

    await modal.present();
  }
}
