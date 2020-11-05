import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { GallaryRoutingModule } from './gallary-routing.module';
import { GallaryComponent } from './pages/gallary.component';


@NgModule({
  declarations: [
    GallaryComponent
  ],
  imports: [
    CommonModule,
    GallaryRoutingModule
  ],
  providers: [],
})
export class GallaryModule { }
