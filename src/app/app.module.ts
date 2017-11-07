import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginscreenComponent } from '../app/components/loginscreen/loginscreen.component';
import { HardwarelistComponent } from '../app/components/hardwarelist/hardwarelist.component';
import { AddhardwareComponent } from '../app/components/addhardware/addhardware.component';
import { DatabaseemulatorService} from '../app/services/databaseemulator.service';
const appRoutes: Routes = [
  {path: '', component: LoginscreenComponent},
  {path: 'list', component: HardwarelistComponent},
  {path: 'toevoegen', component: AddhardwareComponent}
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
  providers: [DatabaseemulatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
