import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ça charge");
  }

  submitForm(form) {
    console.log("form submitted" + form);
  }

}
