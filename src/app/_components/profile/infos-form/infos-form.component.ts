import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-infos-form',
  templateUrl: './infos-form.component.html',
  styleUrls: ['./infos-form.component.scss'],
})
export class InfosFormComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private modal: ModalController
    ) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  // ! FIXME: ne fonctionne pas, l'entité attendue = userDToIn = avec password
  onSubmit(form: NgForm) {
    console.log(this.user);
  }
  
  dismissModal() {
    this.modal.dismiss();
  }

}
