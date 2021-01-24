import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {}

  submitForm(form) {
    console.log(form.value);
    const user = new User().createNewUser(form.value);
    let credentials = { email: form.value.email, password: form.value.password };
    this.userService
      .register(user)
      .subscribe(
        user => {
          console.log(user);
          this.userService.login(credentials);
          this.router.navigate(['/profile']);
        },
        error => console.error(error.message)
      );
  }

}
