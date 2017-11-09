import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginscreenComponent } from '../app/components/loginscreen/loginscreen.component';
import { HardwarelistComponent } from '../app/components/hardwarelist/hardwarelist.component';
import { AddhardwareComponent } from '../app/components/addhardware/addhardware.component';
import { DatabaseemulatorService} from '../app/services/databaseemulator.service';
import { ToevoegGuardService } from '../app/services/toevoeg-guard.service';
import { LoggedinGuardService } from '../app/services/loggedin-guard.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const appRoutes: Routes = [
  {path: '', component: LoginscreenComponent},
  {path: 'list', component: HardwarelistComponent, canActivate: [LoggedinGuardService]},
  {path: 'toevoegen', component: AddhardwareComponent, canActivate: [ToevoegGuardService]}
]

export const firebaseConfig = {
  apiKey: "AIzaSyCukmE_Lq8Fv3m4BxJD-c9_MfuhxUJqKZ4",
  authDomain: "testapp-f9d2d.firebaseapp.com",
  databaseURL: "https://testapp-f9d2d.firebaseio.com",
  projectId: "testapp-f9d2d",
  storageBucket: "testapp-f9d2d.appspot.com",
  messagingSenderId: "817299676821"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    HardwarelistComponent,
    AddhardwareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [DatabaseemulatorService, ToevoegGuardService, LoggedinGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
