import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { CustomerFormComponent } from '../app/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
