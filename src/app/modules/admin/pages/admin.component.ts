import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Users } from './../../../shared/interfaces/users';
import { Appointment } from './../../../shared/interfaces/appointment';
import { Contact } from 'src/app/shared/interfaces/contact';
import { Doctors } from 'src/app/shared/interfaces/doctors';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Users: Users;
  Admins: Users;
  Registers: Users;
  Appointments: Appointment;
  Contact: Contact;
  Doctors: Doctors;
  single: any[];
  view: any[] = [1000, 800];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#92eaed', '#2196f3', '#17a2b8', '#6610f2', '#9c27b0']
  };
  multi: any[];


  // options
  showXAxis = true;
  showYAxis = true;
  gradients = false;
  showLegends = true;
  showXAxisLabel = true;
  xAxisLabel = 'Data';
  showYAxisLabel = true;
  yAxisLabel = 'Value';


  constructor(
    private route: ActivatedRoute,
    private service: AuthService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.Registers = res.Registers;
      this.Admins = res.Admins;
      this.Users = res.Users;
      this.Appointments = res.Appointments;
      this.Contact = res.Contact;
      this.Doctors = res.Doctors;
    });
    var single = [
      {
        name: "Admins",
        value: this.Admins['length'],
      },
      {
        name: "Users",
        value: this.Users['length'],
      }
    ];
    var multi = [
      {
        name: "Admins",
        value: this.Admins['length'],
      },
      {
        name: "Users",
        value: this.Users['length'],
      },
      {
        name: "Appointments",
        value: this.Appointments['length'],
      },
      {
        name: "Contacts",
        value: this.Contact['length'],
      },
      {
        name: "Doctors",
        value: this.Doctors['length'],
      }
    ];
    Object.assign(this, { single });
    Object.assign(this, { multi });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelectData(event) {
    console.log(event);
  }
}
