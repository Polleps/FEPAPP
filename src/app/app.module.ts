import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginscreenComponent } from '../app/components/loginscreen/loginscreen.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: 'AIzaSyA8HhAUwcIIfuxm3Z8HjquZhbBOTbkLx-0',
  authDomain: 'fepapp-2c38f.firebaseapp.com',
  databaseURL: 'https://fepapp-2c38f.firebaseio.com',
  storageBucket: '',
  messagingSenderID: '911761469430'
};

NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabase
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }