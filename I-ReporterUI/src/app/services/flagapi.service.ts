import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl='http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class FlagapiService {

  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post(`${baseUrl}flag/create/`,data)
  }
}
