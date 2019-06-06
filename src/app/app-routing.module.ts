import { NotFoundComponent } from './component/not-found/not-found.component';
import { CustomerComponent } from './component/customer/customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:"/customer", pathMatch:"full"},
  {path:"customer", component: CustomerComponent},
  {path:"**", component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
