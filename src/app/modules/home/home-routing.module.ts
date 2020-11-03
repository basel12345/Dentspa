import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'read-more',
      loadChildren: () => import("./read-more/read-more.module").then(m => m.ReadMoreModule)
    }, 
    {
      path: 'contact-us',
      loadChildren: () => import("./contact-us/contact-us.module").then(m => m.ContactUsModule)
    },
    {
      path: 'appointment',
      loadChildren: () => import('./online-appointment/online-appointment.module').then(m => m.OnlineAppointmentModule)
    },
    {
      path: 'department/:id',
      loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    },
    {
      path: 'doctor/:id',
      loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
