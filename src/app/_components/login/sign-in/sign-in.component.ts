import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;


  constructor(
    private userService: UserService,
    private router: Router,
    private TokenService: TokenService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.userService
      .login(form.value)
      .subscribe(res => {
        this.TokenService.handleResponse(res);
        this.router.navigate(['/home']);
      });
  }

}
