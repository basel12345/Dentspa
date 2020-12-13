import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { UsersComponent } from './pages/users.component';
import { RegistersResolver } from 'src/app/shared/resolvers/register.resolver';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    RegistersResolver
  ],
})
export class UsersModule { }
