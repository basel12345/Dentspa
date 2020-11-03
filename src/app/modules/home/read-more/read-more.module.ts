import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ReadMoreComponent } from './pages/read-more.component';
import { ReadMoreRoutingModule } from './read-more-routing.module';


@NgModule({
  declarations: [
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    ReadMoreRoutingModule
  ],
  providers: [],
})
export class ReadMoreModule { }
