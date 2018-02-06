import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NotificaionsComponent } from './notificaions/notificaions.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPwdComponent,
    EmployeeDetailsComponent,
    AddUserComponent,
    NotificaionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
