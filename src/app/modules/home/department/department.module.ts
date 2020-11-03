import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './pages/department.component';


@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class DepartmentModule { }
