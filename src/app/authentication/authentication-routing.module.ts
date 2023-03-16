import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {ActivateUserComponent} from './pages/activate-user/activate-user.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'activate-user/:hash',
        component: ActivateUserComponent,
      },
    ],
  },
  {
    path: '*',
    loadChildren: () => import('../../app/pages/miscellaneous/miscellaneous.module')
      .then(m => m.MiscellaneousModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
