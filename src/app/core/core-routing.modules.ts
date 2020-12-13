import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'signup',
    loadChildren: () => import("./signup/signup.module").then(m => m.SignupModule)
  },
  {
    path: 'login',
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
