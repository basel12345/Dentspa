import { LocalStorageService } from './../../../shared/Storage/local-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private localStorage: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {return this.loginForm.controls;}

  signUp() {
    this.router.navigate(["core/signup"]);
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.service.login(this.loginForm.getRawValue()).subscribe(res => {
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
