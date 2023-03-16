import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { NbAlertModule, NbCardModule, NbInputModule, NbLayoutModule, NbSpinnerModule } from '@nebular/theme';
import { ActivateUserComponent } from './pages/activate-user/activate-user.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthLayoutComponent,
    ActivateUserComponent,
    ForgotPasswordComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbCardModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbLayoutModule,
    NbInputModule,
  ]
})
export class AuthenticationModule { }
