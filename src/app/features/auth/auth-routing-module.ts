import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Login} from './login/login';
import {RegisterClient} from './register/register-client/register-client';
import {RegisterSeller} from './register/register-seller/register-seller';
import {ForgotPassword} from './login/forgot-password/forgot-password';
import {Register} from './register/register';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'register/client', component: RegisterClient },
  { path: 'register/seller', component: RegisterSeller },
  { path: 'forgot-password', component: ForgotPassword },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redireciona /auth para /auth/login
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
