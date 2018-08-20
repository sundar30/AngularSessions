import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  constructor(private http: HttpClient) { }
  
  getCarousels() {
    return this.http.get('https://jsonblob.com/api/jsonBlob/b479c122-9c68-11e8-b69d-d94a56f70db4');
  }
}
