import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { MYDATA } from './data.mock'
import { Users } from './data-model'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  userslist: Users[];
  constructor() { }

  getData(): Observable<Users[]> {
    //this.userslist= MYDATA
    return of(MYDATA);
  }

}
