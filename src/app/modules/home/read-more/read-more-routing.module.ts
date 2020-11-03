import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadMoreComponent } from './pages/read-more.component';

const routes: Routes = [
    {
        path: '',
        component: ReadMoreComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadMoreRoutingModule { }
