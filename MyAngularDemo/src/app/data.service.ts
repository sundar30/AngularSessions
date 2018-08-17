import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  getDetails(){
    return this.http.get("https://jsonblob.com/api/46fba013-a227-11e8-998f-830259efaadb");
  }
}
