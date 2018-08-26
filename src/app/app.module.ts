import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemdetailComponent } from './item/itemdetail/itemdetail.component';
import { ItemlistComponent } from './item/itemlist/itemlist.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SingleItemComponent } from './item/single-item/single-item.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/Forms';
import { DataService } from './data.service';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { AuthorService } from './Auth/authorService';
import { Http, HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Auth/auth-gaurd.service';
import { FilterPipe } from './filter.pipe';
import {  Route } from './routing.module';


export const firebaseConfig = {
  apiKey: 'AIzaSyAxyaht28S1_sXeH4jMA0opcGr5Pk6Ml60',
  authDomain: 'shopping-app-5fb4b.firebaseapp.com',
  databaseURL: 'https://shopping-app-5fb4b.firebaseio.com',
  projectId: 'shopping-app-5fb4b',
  storageBucket: 'shopping-app-5fb4b.appspot.com',
  messagingSenderId: '192222210921'
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    ItemdetailComponent,
    ItemlistComponent,
    ShoppingCartComponent,
    SingleItemComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    FilterPipe



  ],
  exports:
    [
      RouterModule,
      FormsModule,
      HttpModule

    ],
  imports: [
    BrowserModule,
    FormsModule,
    Route,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [AuthorService, DataService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
