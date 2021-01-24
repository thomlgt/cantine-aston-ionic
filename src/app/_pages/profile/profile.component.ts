import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  isSelected: string = "orders"; // Choix par défaut;
  user: User;
  profilePicture: string;

  constructor(
    private service: UserService) { }

  ngOnInit(): void {
    this.user = this.service.getCurrentUser();
    if (this.user) {
      this.profilePicture = `../../../../assets/images/avatars/${this.user.imageId}.png`;
    }
  }

  ok() {
    console.log("ok");
  }
}
