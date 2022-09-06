import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CustomerComponent } from './component/customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
