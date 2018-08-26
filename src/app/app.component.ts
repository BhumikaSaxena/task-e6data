import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  LoadedFeature = 'Home';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAxyaht28S1_sXeH4jMA0opcGr5Pk6Ml60',
      authDomain: 'shopping-app-5fb4b.firebaseapp.com'
    });
  }
}
