import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineAppointmentComponent } from './pages/online-appointment.component';

const routes: Routes = [
    {
        path: '',
        component: OnlineAppointmentComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineAppointmentRoutingModule { }
