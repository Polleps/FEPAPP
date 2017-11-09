import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DatabaseemulatorService} from '../../services/databaseemulator.service';

@Component({
  selector: 'app-hardwarelist',
  templateUrl: './hardwarelist.component.html',
  styleUrls: ['./hardwarelist.component.css']
})
export class HardwarelistComponent implements OnInit {
  //Lijst van alle hardware die uit de database komt
  hardware: Hardware[] = [];

  //Variablen die gebruikt worden in de UI logica
  description: string;
  selected: number;
  selectedDate: string = '';
  dateErrorMsg: string = '';
  //Variable die er voor zorgt dat studenten de toevoeg knop niet te zien krijgen.
  userIsAdmin: boolean;

  constructor(private database: DatabaseemulatorService) {
    
  }

  ngOnInit() {
    //Hier moet een check komen of de user een student of docent is.
    this.userIsAdmin = this.database.userIsAdmin();

    this.fetchHardware();
  }
  fetchHardware(): void {
    //Vervanging voor Firebase
    //met return true krijg ik alles terug
    this.database.query("hardware", h => {return true;}).then(result =>{
      this.hardware = result;
    }).catch(err => console.log(err));
  }
  setDesc(index: number): void{
    this.description = this.hardware[index].beschrijving;
    this.selected = index;
  }
  checkDate(event: any): void{
    //Hier checken of de datum al bezet is
    //Value krijg je met event.target.value

    //Checkt of de datum niet voor de huidige datum is
    if(new Date(event.target.value) <= new Date(Date.now())){
      this.dateErrorMsg = "Dit is geen geldige datum";
      event.target.value = "";
      this.selectedDate = "";
      return;
    }
    this.dateErrorMsg = "";
  }
  submitReservering(): void{ 
    //Validate de selectie en update de database:
    
  }
}

interface Hardware {
  naam: string,
  beschrijving: string,
  aantal: number,
  beschikbaar: number
}