import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

//Services
import { PlansService } from "./core/service/plans/plans.service";
import { CarouselService } from "./core/service/carousel/carousel.service";

import { ContactusComponent } from './landing/contactus/contactus.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [ 
  {
    path:'products',
    component: ProductsComponent
  },  
  {
    path:'contactus',
    component: ContactusComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  { 
    path:'',
    component: LandingComponent
  },
  {
    path:'**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [ContactusComponent,LoginComponent],
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } )],
  exports: [RouterModule],
  providers: [PlansService,CarouselService]
})
export class AppRoutingModule { }
