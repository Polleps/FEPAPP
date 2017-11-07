import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";


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
  constructor(private af: AngularFireDatabase) {}

  
  ngOnInit(){}

  getUsers(){
    return this.af.list('/accounts');
  }
  submitLogin(){
    //TODO: Voeg firebase login dingen toe
    //De value van email en password krijg je met: this.email.value en this.password.value
    for(let i in this.getUsers()){
      if (i[0] == this.email.value && i[1] == this.password.value){
        return true;
      }
    }    
  };



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