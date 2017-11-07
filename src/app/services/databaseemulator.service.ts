import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseemulatorService {
  private users: User[] = [
    {email: "admin@admin.admin", password: "admin", isAdmin: true},
    {email: "geen@admin.rip", password: "wachtwoord123", isAdmin: false}
  ];
  private hardware: Hardware[] = [];
  private reserveringen: Reservering[] = [];
  private scheme = {};
  constructor() {
    this.scheme = {
      users: this.users,
      hardware: this.hardware,
      reserveringen: this.reserveringen
    }
   }

  public query(db, query): any {
    return new Promise((resolve, reject) => {
      if(this.scheme[db] == null){
        reject("Database bestaat niet.");
      }
      else{
        let result = this.scheme[db].filter(query);
        if(result.length > 0){
          console.log(result)
          resolve(result);
        }
        else{
          reject("Geen resultaten");
        }
      }
    });
  }

  public insert(db, object): boolean {
    if(this.scheme[db] == null) return false;
    this.scheme[db].push(object);
    return true;
  }

  public update(db, query, object): boolean {
    //update function is niet nodig;
    return false;
  }
}

interface User {
  email: string,
  password: string,
  isAdmin: boolean
}

interface Hardware {
  id: string,
  naam: string,
  beschrijving: string,
  aantal: number,
  beschikbaar: number
}

interface Reservering {
  id: string,
  hardware_id: string,
  user_id: string,
  aantal: number,
  datum: string
}