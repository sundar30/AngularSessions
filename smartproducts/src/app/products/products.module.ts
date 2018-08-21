import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from "./products.component";
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsComponent, ProductdetailsComponent]
})
export class ProductsModule { }
