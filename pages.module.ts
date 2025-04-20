import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAccessComponent } from './no-access/no-access.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';



@NgModule({
  declarations: [

    NoAccessComponent,
    CustomerPageComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class PagesModule { }
