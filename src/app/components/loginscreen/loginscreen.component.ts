import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseemulatorService} from '../../services/databaseemulator.service';
@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {
  
  email: RequiredFormField = {
    value: "",
    cssClass: "",
    status: 0,
    errorMsg: ""
  }
  password: RequiredFormField = {
    value: "",
    cssClass: "",
    status: 0,
    errorMsg: ""
  }
  constructor(private router: Router, private database: DatabaseemulatorService) { }

  ngOnInit() {}

  submitLogin(){
    //TODO: Voeg firebase login dingen toe
    //De value van email en password krijg je met: this.email.value en this.password.value
    //Er wordt hier gebruik gemaakt van een snel in elkaar gezette database emulatie todat firebase functionaliteit kan worden toegevoegd.
    this.database.query("users", user => user.email === this.email.value && user.password === this.password.value).then(res => {
      //Redirect naar /list als alles klopt:
      console.log("dingdong")
      this.router.navigate(["list"]);
    }).catch(err => {
      console.log(err)
    });
    
  }

  onEmailBlur(event: any){
    //value is een valid email
    if(this.validateEmail(event.target.value)){
      this.email.cssClass = "valid";
      this.email.status = 2;
      return;
    }
    //value is geen valid email
    this.email.cssClass = "invalid";
    this.email.status = 1;
    
    if(event.target.value.trim() === ""){
      this.email.errorMsg = "Email is required";
    }
    else {
      this.email.errorMsg = "Email is not valid";
    }
    
    
  }
  onPasswordInput(event: any){
    if(event.target.value.trim() === ""){
      //password is invalid
      this.password.cssClass = "invalid";
      this.password.status = 1;
      this.password.errorMsg = "Password is required";
    }
    else{
      //password is valid
      this.password.cssClass = "valid";
      this.password.status = 2;
    }
    
  }
  validateEmail(email) {
    //Check of de email aan alle requirements voldoet
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
interface RequiredFormField {
  value: string,
  cssClass: string,
  status: number,
  errorMsg: string
}