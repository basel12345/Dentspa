import { Doctors } from 'src/app/shared/interfaces/doctors';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { DoctorService } from '../services/doctor.service';

@Injectable()
export class DoctorsResolver implements Resolve<Doctors> {
  constructor(private service: DoctorService) {}

  resolve() {
    return this.service.getAllDoctor();
  }
}
