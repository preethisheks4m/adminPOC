import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userAdmin=new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    userPassword: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)])
  })


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("login success");
  }


}
