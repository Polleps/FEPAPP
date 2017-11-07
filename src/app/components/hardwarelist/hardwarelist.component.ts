import { Component, OnInit } from '@angular/core';
import { DatabaseemulatorService} from '../../services/databaseemulator.service';

@Component({
  selector: 'app-hardwarelist',
  templateUrl: './hardwarelist.component.html',
  styleUrls: ['./hardwarelist.component.css']
})
export class HardwarelistComponent implements OnInit {
  //Lijst van alle hardware die uit de database komt
  hardware: Hardware[] = [];

  //Variablen die gebruikt worden in de UI logica0
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
    this.userIsAdmin = true;

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
    var x = new Date(event.target.value);
    var y = new Date(Date.now());
    
    if(x <= y){
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