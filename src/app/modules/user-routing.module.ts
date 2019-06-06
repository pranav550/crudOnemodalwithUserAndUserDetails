import { UserDetailComponent } from './../component/user-detail/user-detail.component';
import { UserComponent } from './../component/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'users/:id', component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
