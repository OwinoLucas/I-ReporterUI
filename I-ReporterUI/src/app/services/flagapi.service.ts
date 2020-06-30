import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl='http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class FlagapiService {

  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post(`${baseUrl}flags/create/`,data)
  }
  getAll(){
    return this.http.get(`${baseUrl}flags/`)
  }
  get(id){
    return this.http.get(`${baseUrl}/${id}`);
  }
  delete(id){
    return this.http.delete(`${baseUrl}/${id}`)
  }
  putrecord(id,data){
    return this.http.put(`${baseUrl}/${id}/`,data)
  }
}
