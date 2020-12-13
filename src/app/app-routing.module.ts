import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './shared/Guard/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.modules').then(m => m.CoreModule)
  },
  { path: '**', redirectTo: 'core' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
