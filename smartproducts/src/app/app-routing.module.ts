import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

//Services
import { PlansService } from "./core/service/plans/plans.service";
import { CarouselService } from "./core/service/carousel/carousel.service";

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PlansService,CarouselService]
})
export class AppRoutingModule { }
