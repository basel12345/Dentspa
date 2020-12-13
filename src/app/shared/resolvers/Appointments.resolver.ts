import { Injectable } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

import { Resolve } from '@angular/router';
import { Appointment } from './../interfaces/appointment';

@Injectable()
export class AppointmentsResolver implements Resolve<Appointment> {
  constructor(private service: AppointmentService) {}

  resolve() {
    return this.service.getAllAppointment();
  }
}
