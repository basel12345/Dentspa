import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'services',
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
      path: 'gallary',
      loadChildren: () => import('./gallary/gallary.module').then(m => m.GallaryModule)
    },
    {
      path: 'doctors',
      loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule)
    },
    {
      path: 'about-us',
      loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
