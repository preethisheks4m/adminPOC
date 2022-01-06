import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes=[
    {path:'loginPage',component:LoginPageComponent},
    {path:'userRegistration',component:UserRegistrationComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  