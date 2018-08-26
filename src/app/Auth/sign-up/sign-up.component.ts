import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AuthorService } from '../authorService';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name: string;

  constructor(private authService: AuthorService) {

  }

  ngOnInit() {

  }
  onSignup(form: NgForm) {

    const email = form.value.email;

    const password = form.value.password;

    const Check_Confirm_Password = form.value.Check_Confirm_Password;

    if (password !== Check_Confirm_Password) {
      alert('passwords dont match!! kindly Renter!');
      return;
    }

    if (password.length <= 6
    ) {
      alert('password length should be greater than 6!!');
    }

    this.authService.signupUser(email, password);
  }

}


