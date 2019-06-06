import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './modules/user.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NotFoundComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
