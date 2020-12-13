import { AppointmentService } from './../../../../shared/services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'online-appointment-root',
  templateUrl: './online-appointment.component.html',
  styleUrls: ['./online-appointment-routing.component.css']
})
export class OnlineAppointmentComponent implements OnInit {
  Appointment: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private service: AppointmentService) {}

  ngOnInit() {
    this.Appointment = this.fb.group({
      name: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      date: ['', Validators.required],
    });
    this.Appointment.valueChanges.subscribe(change => {
      if (isNaN(change.mobile)) {
        this.Appointment.patchValue({
          mobile: change.mobile.replace(/[a-zA-Z]/g, null)
        });
      }
    });
  }

  get f() {return this.Appointment.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.Appointment.invalid) {
      return;
    }
    this.service.addAppointment(this.Appointment.getRawValue()).subscribe(res => {
      if (res['status'] === true) {
        Swal.fire({
          icon: 'success',
          title: res['message'],
          text: 'Something went wrong!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: res['message'],
          text: 'Something went wrong!',
        });
      }
    });
  }
}
