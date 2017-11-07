import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
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
  constructor(private router: Router) { }

  ngOnInit() { }

  //Voeg de hardware toe aan de database en stuur de user terug naar de harware list.
  toevoegen(): void{
    if(this.naam.trim() === "" || this.beschrijving.trim() === "" || this.aantal < 1){
      this.errorMsg = "Vul alle velden in a.u.b.";
      return;
    }
    this.errorMsg = "";
    //Database dingen hier:

    //Redirect:
    this.router.navigate(["list"]);
  }
}
