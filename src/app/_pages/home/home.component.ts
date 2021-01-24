import { TokenService } from './../../_services/token.service';
import { UserService } from './../../_services/user.service';
import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService, 
    private tokenService: TokenService,
  ) { 
    this.tokenService.tokenChange.subscribe(_ => this.ngOnInit());
  }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  // /** TEMP no connexion */

  // constructor() {}

  // ngOnInit(): void {
  // }

}
