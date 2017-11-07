import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginscreenComponent } from '../app/components/loginscreen/loginscreen.component';
import { HardwarelistComponent } from '../app/components/hardwarelist/hardwarelist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    HardwarelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
