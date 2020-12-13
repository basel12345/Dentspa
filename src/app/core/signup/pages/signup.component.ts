import { LocalStorageService } from './../../../shared/Storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private localStorage: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.SignupForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3) ]],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      isRole: ['', Validators.required],
    });
  }

  get f() {return this.SignupForm.controls;}

  logIn() {
    this.router.navigate(['core/login']);
  }

  onSubmit() {
    this.submitted = true;
    if (this.SignupForm.invalid) {
      return;
    }
    this.service.register(this.SignupForm.getRawValue()).subscribe(res => {
      this.localStorage.setUser(res['user']);
      this.localStorage.setToken(res['token']);
      this.router.navigate(['home']);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: res['message']
      });
    });
  }

}
