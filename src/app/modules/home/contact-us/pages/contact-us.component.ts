import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'contact-us-root',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ContactUs: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private service: ContactService) {}

  ngOnInit() {
    this.ContactUs = this.fb.group({
      name: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      date: ['', Validators.required],
    });
    this.ContactUs.valueChanges.subscribe(change => {
      if (isNaN(change.mobile)) {
        this.ContactUs.patchValue({
          mobile: change.mobile.replace(/[a-zA-Z]/g, null)
        });
      }
    });
  }

  get f() {return this.ContactUs.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.ContactUs.invalid) {
      return;
    }
    this.service.addContact(this.ContactUs.getRawValue()).subscribe(res => {
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
