import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl='http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class InterventionRecordService {
  searchdata:any
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
  delete(id){
    return this.http.delete(`${baseUrl}intervention-record-detail/${id}`)
  }
  putrecord(id,data){
    return this.http.put(`${baseUrl}intervention-record-detail/${id}/`,data)
  }
  getbytitle(title){
    this.searchdata= this.http.get(`${baseUrl}intervention-records/${title}`).subscribe(data=>{this.searchdata=data});
    console.log(this.searchdata)
    return this.http.get(`${baseUrl}intervention-records/${title}`);
  }
}
