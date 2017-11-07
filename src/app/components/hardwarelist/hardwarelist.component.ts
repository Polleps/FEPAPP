import { Component, OnInit } from '@angular/core';

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

  constructor() {
    
  }

  ngOnInit() {
    //Hier moet een check komen of de user een student of docent is.
    this.userIsAdmin = true;

    this.initofzo();
  }
  initofzo(): void {
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Ik ben een ding", aantal: 10, beschikbaar: 2});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Bla bla bla", aantal: 10, beschikbaar: 6});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "1 2 3 4 5", aantal: 10, beschikbaar: 8});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Je moeder is een plopkoek", aantal: 10, beschikbaar: 2});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Aha", aantal: 10, beschikbaar: 9});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Aha", aantal: 10, beschikbaar: 9});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Aha", aantal: 10, beschikbaar: 9});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Aha", aantal: 10, beschikbaar: 9});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Aha", aantal: 10, beschikbaar: 9});
    
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
    alert("WOWOWOWOWOW JIJ KLIKT OP RESERVEREN!!!")
  }
}

interface Hardware {
  naam: string,
  beschrijving: string,
  aantal: number,
  beschikbaar: number
}