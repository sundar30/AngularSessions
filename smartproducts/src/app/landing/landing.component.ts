import { Component, OnInit } from '@angular/core';

import { PlansService } from '../core/service/plans/plans.service';
import { CarouselService } from '../core/service/carousel/carousel.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  myPlans:any=[];
  myCarousels:any=[];
  constructor(
    private myservicePlans: PlansService, 
    private myserviceCarousels: CarouselService) { }

  ngOnInit() {
   this.myservicePlans.getPlans().subscribe(
     (response) => this.myPlans = response['plans']); 
     
   this.myserviceCarousels.getCarousels().subscribe(
    (response) => this.myCarousels = response['carousels']); 
  }

  

}
