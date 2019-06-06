import { UserDetailComponent } from './../component/user-detail/user-detail.component';
import { UserComponent } from './../component/user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
