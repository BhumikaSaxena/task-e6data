import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthorService } from '../authorService';
import {AngularFireAuth} from 'angularfire2/auth'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService : AuthorService,private router : Router) { }

  ngOnInit() {
  }
  Login(form: NgForm) {
  
  const email = form.value.email;
  const password = form.value.password;
 const result = this.authService.signinUser(email, password);
 this.router.navigate(['/']);
 console.log(result);
  }

}


