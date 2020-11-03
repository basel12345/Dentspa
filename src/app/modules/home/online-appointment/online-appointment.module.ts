import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlineAppointmentRoutingModule } from './online-appointment-routing.component';
import { OnlineAppointmentComponent } from './pages/online-appointment.component';


@NgModule({
  declarations: [
    OnlineAppointmentComponent
  ],
  imports: [
    CommonModule,
    OnlineAppointmentRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class OnlineAppointmentModule { }
