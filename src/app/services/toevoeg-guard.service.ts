import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { DatabaseemulatorService } from './databaseemulator.service';
@Injectable()
export class ToevoegGuardService implements CanActivate {

  constructor(private database: DatabaseemulatorService) { }
  canActivate() {
    return this.database.userIsAdmin();
  }
}
