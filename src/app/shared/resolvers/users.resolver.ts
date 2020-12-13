import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { Resolve } from '@angular/router';
import { Users } from '../interfaces/users';

@Injectable()
export class UsersResolver implements Resolve<Users> {
  constructor(private service: AuthService) {}

  resolve() {
    return this.service.getAllUsers();
  }
}
