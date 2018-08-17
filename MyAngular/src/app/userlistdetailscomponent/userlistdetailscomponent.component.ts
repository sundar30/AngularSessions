import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../data-model'


@Component({
  selector: 'app-userlistdetailscomponent',
  templateUrl: './userlistdetailscomponent.component.html',
  styleUrls: ['./userlistdetailscomponent.component.css']
})
export class UserlistdetailscomponentComponent implements OnInit {
  @Input('list') selecteduser: Users;
  @Input('mode') modeoption: string;
  constructor() { }

  ngOnInit() {
  }

}
