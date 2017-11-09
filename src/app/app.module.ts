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
const appRoutes: Routes = [
  {path: '', component: LoginscreenComponent},
  {path: 'list', component: HardwarelistComponent, canActivate: [LoggedinGuardService]},
  {path: 'toevoegen', component: AddhardwareComponent, canActivate: [ToevoegGuardService]}
]

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatabaseemulatorService, ToevoegGuardService, LoggedinGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
