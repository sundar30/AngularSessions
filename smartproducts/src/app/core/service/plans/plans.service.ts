import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  constructor(private http: HttpClient) { }

  getPlans() {
    return this.http.get('https://jsonblob.com/api/jsonBlob/1a455038-9c65-11e8-b69d-01b0f3f8d232');
  }

}
