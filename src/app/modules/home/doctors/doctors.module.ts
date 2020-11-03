import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './pages/doctors.component';


@NgModule({
  declarations: [
    DoctorsComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
  ],
  providers: [],
})
export class DoctorsModule { }
