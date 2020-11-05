import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './pages/doctors.component';

const routes: Routes = [
    {
        path: '',
        component: DoctorsComponent,
    },
    {
      path: 'profile/:id',
      loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
