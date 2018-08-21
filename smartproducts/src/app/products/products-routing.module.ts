import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "./products.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";

const routes: Routes = [
  {
    path:'details',
    component: ProductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
