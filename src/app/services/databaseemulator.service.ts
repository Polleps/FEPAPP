import { Injectable } from '@angular/core';

//firebase dingen
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

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
  private collectionScheme = {};
  private loggedInUser: User;
  private usersCollection: AngularFirestoreCollection<User>;
  private hardwareCollection: AngularFirestoreCollection<Hardware>;
  private reserveringCollection: AngularFirestoreCollection<Reservering>;
  
  constructor(private afs: AngularFirestore) {
    this.scheme = {
      users: this.users,
      hardware: this.hardware,
      reserveringen: this.reserveringen
    }
    this.collectionScheme = {
      users: this.usersCollection,
      hardware: this.hardwareCollection,
      reserveringen: this.reserveringCollection
    }
    this.fetchUsers();
    this.fetchHardware();
    this.fetchReserveringen();
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
  public isLoggedIn(): boolean {
    return this.loggedInUser != null;
  }

  public userIsAdmin(): boolean {
    return this.loggedInUser.isAdmin;
  }

  private fetchReserveringen(): void {
    this.collectionScheme['reserveringen'] = this.afs.collection('reservering');
    let collection$: Observable<Reservering[]> = this.collectionScheme['reserveringen'].valueChanges();
    collection$.subscribe(data => this.scheme['reserveringen'] = data);
  }

  private fetchHardware(): void {
    this.collectionScheme['hardware'] = this.afs.collection('hardware');
    let collection$: Observable<Hardware[]> = this.collectionScheme['hardware'].valueChanges();
    collection$.subscribe(data => this.scheme['hardware'] = data);
  }

  private fetchUsers(): void {
    this.collectionScheme['users'] = this.afs.collection('users');
    let collection$: Observable<User[]> = this.collectionScheme['users'].valueChanges();
    collection$.subscribe(data => this.scheme['users'] = data);
  }
  
  public authenticate(email: string, password: string){
    this.loggedInUser = this.scheme["users"].find(u => u.email === email && password === password);
    console.log(this.scheme['users']);
    return this.loggedInUser != null;
  }
  public insert(db: string, object: any, generateId: boolean, callback = null): boolean {
    if(this.collectionScheme[db] == null) return false;
    if(generateId) object.id = Math.floor(Math.random() * 1000000000000).toString();
    this.scheme[db].push(object);
    this.collectionScheme[db].add(object);
    this.fetchUsers();
    this.fetchHardware();
    this.fetchReserveringen();
    if(callback) callback();
    return true;
  }
  public addReservering(hardwareId: string, datum: string): boolean{
    let rHardware = this.query('hardware', x => x.id === hardwareId).catch("Hardware Bestaat niet");
    let reserveringOpDatum = this.query('reserveringen', x => x.hardware_id === hardwareId && x.datum === datum).catch("Reservering niet gevonden");
    if(rHardware.aantal - reserveringOpDatum.length <= 0) return false;
    this.insert('reserveringen', {
      hardware_id: hardwareId,
      user_id: this.loggedInUser.email,
      aantal: 1,
      datum: datum
    }, true);
    return true;
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