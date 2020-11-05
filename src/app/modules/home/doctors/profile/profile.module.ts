import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ProfileComponent } from './pages/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ],
  providers: [],
})
export class ProfileModule { }
