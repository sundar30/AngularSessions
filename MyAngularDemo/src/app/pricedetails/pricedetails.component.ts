import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pricedetails',
  templateUrl: './pricedetails.component.html',
  styleUrls: ['./pricedetails.component.css']
})
export class PricedetailsComponent implements OnInit {
  myplans:any;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getDetails().subscribe( 
      response => {        
        this.myplans = response;
      }
    )
   // console.log(this);
  }



}
