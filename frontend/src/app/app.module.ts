/** 
Defines the root module of the application along with metadata about the module. 
For more info about angular 8 modules check out the official docs site: https://angular.io/guide/ngmodules
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ProductsComponent } from '@app/modules/products/page/products/products.component';
import { LoginComponent } from '@app/modules/auth/page/login/login.component';
import { RegisterComponent } from '@app/modules/auth/page/register/register.component';
import { CartComponent } from '@app/modules/cart/page/cart/cart.component';
import { AdminComponent } from '@app/modules/admin/page/admin/admin.component'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor, ErrorInterceptor } from '@app/core/interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
	MatSelectModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
			  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
			 ],
	
  bootstrap: [AppComponent]
})
export class AppModule { }
