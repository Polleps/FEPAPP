import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardwarelist',
  templateUrl: './hardwarelist.component.html',
  styleUrls: ['./hardwarelist.component.css']
})
export class HardwarelistComponent implements OnInit {
  hardware: Hardware[] = [];
  description: string;
  selected: number;
  selectedDate: string = '';
  userIsAdmin: boolean;
  constructor() {
    this.userIsAdmin = true;
  }

  ngOnInit() {
    this.initofzo();
  }
  initofzo(): void {
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Ik ben een ding", aantal: 10, beschikbaar: 2});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Bla bla bla", aantal: 10, beschikbaar: 6});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "1 2 3 4 5", aantal: 10, beschikbaar: 8});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Je moeder is een plopkoek", aantal: 10, beschikbaar: 2});
    this.hardware.push({naam: "Raspberry Pi", beschrijving: "Aha", aantal: 10, beschikbaar: 9});
  }
  setDesc(index: number): void{
    this.description = this.hardware[index].beschrijving;
    this.selected = index;
  }
  checkDate(event: any): void{
    //Hier checken of de datum al bezet is
    //Value krijg je met event.target.value

  }
  submitReservering(): void{
    alert("WOWOWOWOWOW JIJ KLIKT OP RESERVEREN!!!")
  }
}

interface Hardware {
  naam: string,
  beschrijving: string,
  aantal: number,
  beschikbaar: number
}