import { Users } from './../../../../shared/interfaces/users';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../shared/services/auth.service";
@Component({
  selector: 'users-root',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Registers: Users;
  constructor(
    private route: ActivatedRoute,
    private service: AuthService
    ) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.Registers = res.Registers;
      console.log(res);
    });
  }
}
