import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'footer-root',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  SubscribeForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.SubscribeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
    })
  }

  get f() {return this.SubscribeForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.SubscribeForm.invalid) {
      return;
    }
    console.log(this.SubscribeForm.getRawValue());
  }
}
