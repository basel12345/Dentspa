import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'online-appointment-root',
  templateUrl: './online-appointment.component.html',
  styleUrls: ['./online-appointment-routing.component.css']
})
export class OnlineAppointmentComponent implements OnInit {
  Appointment: FormGroup;
  submitted = false;
  cover="assets/images/unnamed.png"
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.Appointment = this.fb.group({
      name: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      date: ['', Validators.required],
    })
  }

  get f() {return this.Appointment.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.Appointment.invalid) {
      return;
    }
    console.log(this.Appointment.getRawValue());
  }
}