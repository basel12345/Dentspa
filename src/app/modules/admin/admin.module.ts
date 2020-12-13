import { UsersResolver } from './../../shared/resolvers/users.resolver';
import { AdminsResolver } from './../../shared/resolvers/Admins.resolver';
import { RegistersResolver } from 'src/app/shared/resolvers/register.resolver';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin.component';
import { AppointmentsResolver } from 'src/app/shared/resolvers/Appointments.resolver';
import { ContactResolver } from 'src/app/shared/resolvers/contact.resolver';
import { DoctorsResolver } from 'src/app/shared/resolvers/doctors.resolver';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxChartsModule,
  ],
  providers: [
    RegistersResolver,
    AdminsResolver,
    UsersResolver,
    AppointmentsResolver,
    ContactResolver,
    DoctorsResolver
  ],
})
export class AdminModule { }
