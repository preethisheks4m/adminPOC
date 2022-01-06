import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userForm=new FormGroup({ 
    firstName:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    phoneNumber:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    dateOfBirth:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    userPassword:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
    comments:new FormControl(''),
    street:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    zipCode:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required])
  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("registration success");
  }
success(){
  alert("user successfully registered");
}

  backToLogin(){
    this.router.navigate(['/loginPage']);
  }

}
