import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistersResolver } from 'src/app/shared/resolvers/register.resolver';
import { UsersComponent } from './pages/users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        resolve: {
          Users: RegistersResolver
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
