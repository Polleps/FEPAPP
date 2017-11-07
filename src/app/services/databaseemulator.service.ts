import { Injectable } from '@angular/core';
@Injectable()
export class DatabaseemulatorService {
  private users: User[] = [
    {email: "admin@admin.admin", password: "admin", isAdmin: true},
    {email: "geen@admin.rip", password: "wachtwoord123", isAdmin: false}
  ];
  private hardware: Hardware[] = [
    {id: "87293847293749283742893749284", naam: "Raspberry Pi", beschrijving: "Een kleine computer.", aantal: 10, beschikbaar: 9},
    {id: "83489237498273498723498242947", naam: "Arduino", beschrijving: "Ook een kleine computer.", aantal: 234, beschikbaar: 100},
    {id: "23489723487247938747324729873", naam: "Korg SH-101", beschrijving: "Een super coole synthesizer.", aantal: 4, beschikbaar: 4},
    {id: "13598775834598775435793882774", naam: "Oculus Rift DK2", beschrijving: "VR bril met googley eyes er op van Rik Jansen.", aantal: 1, beschikbaar: 0},
    {id: "09876543212345678909876543212", naam: "Laptop uit het jaar nul", beschrijving: "Nog slechter dan een raspberry Pi, waarschijnlijk draaien hier de HU servers op.", aantal: 16, beschikbaar: 10}
  ];
  private reserveringen: Reservering[] = [];
  private scheme = {};
  constructor() {
    this.scheme = {
      users: this.users,
      hardware: this.hardware,
      reserveringen: this.reserveringen
    }
   }

  public query(db: string, query: any): any {
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

  public insert(db: string, object: any, generateId: boolean): boolean {
    if(this.scheme[db] == null) return false;
    if(generateId) object.id = Math.floor(Math.random() * 1000000000000).toString();
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