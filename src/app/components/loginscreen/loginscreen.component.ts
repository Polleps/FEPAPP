import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {
  // emailClass: string = "";
  // emailStatus: number = 0;
  // emailErrormsg: string = "";
  // passwordClass: string = "";
  // passwordStatus: number = 0;
  // password
  email: RequiredFormField = {
    cssClass: "",
    status: 0,
    errorMsg: ""
  }
  password: RequiredFormField = {
    cssClass: "",
    status: 0,
    errorMsg: ""
  }
  constructor() { }

  ngOnInit() {
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
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
interface RequiredFormField {
  cssClass: string,
  status: number,
  errorMsg: string
}