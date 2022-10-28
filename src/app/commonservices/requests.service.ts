import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http:HttpClient) { }

  getRequest(url:string) {
    return this.http.get(url);
  }

  postRequest() {

  }
}
