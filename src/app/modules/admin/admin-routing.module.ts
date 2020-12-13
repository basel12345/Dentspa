import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsResolver } from 'src/app/shared/resolvers/Admins.resolver';
import { RegistersResolver } from 'src/app/shared/resolvers/register.resolver';
import { UsersResolver } from 'src/app/shared/resolvers/users.resolver';
import { AdminComponent } from './pages/admin.component';
import { AppointmentsResolver } from 'src/app/shared/resolvers/Appointments.resolver';
import { ContactResolver } from 'src/app/shared/resolvers/contact.resolver';
import { DoctorsResolver } from 'src/app/shared/resolvers/doctors.resolver';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        resolve: {
          Registers: RegistersResolver,
          Admins: AdminsResolver,
          Users: UsersResolver,
          Appointments: AppointmentsResolver,
          Contact: ContactResolver,
          Doctors: DoctorsResolver
        }
    },
    {
      path: 'users',
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
