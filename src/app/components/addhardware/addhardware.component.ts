import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseemulatorService} from '../../services/databaseemulator.service';

@Component({
  selector: 'app-addhardware',
  templateUrl: './addhardware.component.html',
  styleUrls: ['./addhardware.component.css']
})
export class AddhardwareComponent implements OnInit {
  naam: string = "";
  beschrijving: string = "";
  aantal: number = 1;
  errorMsg: string;
  constructor(private router: Router, private database: DatabaseemulatorService) { }

  ngOnInit() { }

  //Voeg de hardware toe aan de database en stuur de user terug naar de harware list.
  toevoegen(): void{
    if(this.naam.trim() === "" || this.beschrijving.trim() === "" || this.aantal < 1){
      this.errorMsg = "Vul alle velden in a.u.b.";
      return;
    }
    this.errorMsg = "";
    //Database dingen hier:
    //Math.random is een simpele maar slechte manier om id's te genereren omdat de uuid module niet werkte
    let res = this.database.insert("hardware", {naam: this.naam, beschrijving: this.beschrijving, aantal: this.aantal, beschikbaar: this.aantal}, true);
    //Redirect:
    if(res) this.router.navigate(["list"]);
  }
}
