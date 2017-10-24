import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginscreenComponent } from '../app/components/loginscreen/loginscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
