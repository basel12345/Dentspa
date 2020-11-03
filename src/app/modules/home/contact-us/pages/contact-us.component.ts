import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-us-root',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ContactUs: FormGroup;
  submitted = false;
  cover="assets/images/unnamed.jpg"
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.ContactUs = this.fb.group({
      name: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      date: ['', Validators.required],
    })
  }

  get f() {return this.ContactUs.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.ContactUs.invalid) {
      return;
    }
    console.log(this.ContactUs.getRawValue());
  }
}