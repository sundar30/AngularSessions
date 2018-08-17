import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service'

import { Users } from '../data-model'

@Component({
  selector: 'app-userlistcomponent',
  templateUrl: './userlistcomponent.component.html',
  styleUrls: ['./userlistcomponent.component.css']
})
export class UserlistcomponentComponent implements OnInit {
  usersList: Users[];
  mode: String = 'view';
  selectedUser: Users;
  constructor(private myserivce: MyserviceService) { }
 
  ngOnInit() {
    this.getUsersList();
  }

  getUsersList(): void {
    this.myserivce.getData().subscribe(
      response => this.usersList = response
    );
  }

  viewDetails(list: Users){
    this.selectedUser = list;
    this.mode = "view";
  }

  editDetails(list: Users){
    this.selectedUser = list;
    this.mode = "edit";
  }

}
