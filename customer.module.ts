import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class CustomerModule { }
