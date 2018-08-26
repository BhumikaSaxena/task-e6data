import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  token: string;
  disables: boolean;
  name: string;

  constructor(private router: Router) {
    this.disables = false;
  }
  signupUser(email: string, password: string) {

    firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
      alert('You are successfully Registered!!');
      // tslint:disable-next-line:no-unused-expression
      this.router.navigate(['/']);
    }
    )

      .catch(
        error => alert(error)
      );
  }


  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {

          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => alert(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;

  }
}
