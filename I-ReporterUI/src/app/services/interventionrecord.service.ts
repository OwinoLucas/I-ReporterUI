import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient } from '@angular/common/http';

const baseUrl='http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class InterventionrecordService {

  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post(baseUrl,data)
  }
}
