import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    FooterComponent
  ],
  providers: [],
})
export class CoreModule { }
