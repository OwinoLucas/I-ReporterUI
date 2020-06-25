import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl='http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class InterventionRecordService {

  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post(`${baseUrl}create-intervention-record/`,data)
  }
  getAll(){
    return this.http.get(`${baseUrl}all-intervention-records/`)
  }
  get(id){
    return this.http.get(`${baseUrl}intervention-record-detail/${id}`);
  }
}
