import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsRoutingModule } from './contact-us-routing.module';

import { ContactUsComponent } from './pages/contact-us.component';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class ContactUsModule { }
