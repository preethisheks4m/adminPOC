import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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



  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("login success");
  }

  register(){
    this.router.navigate(['/userRegistration']);
  }


}
