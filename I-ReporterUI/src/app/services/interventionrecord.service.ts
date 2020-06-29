import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const baseUrl='http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class InterventionRecordService {
  searchdata:any
  token=JSON.parse(localStorage.getItem('token'));
  headers=new HttpHeaders().set("Authorization",`Bearer ${this.token}` )
  
  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post(`${baseUrl}api/intervention-record/create/`,data,{headers:this.headers})
  }
  getAll(){
    return this.http.get(`${baseUrl}api/intervention-records/`,{headers:this.headers});
  }
  get(id){
    return this.http.get(`${baseUrl}api/intervention-record/detail/${id}`,{headers:this.headers});
  }
  delete(id){
    return this.http.delete(`${baseUrl}api/intervention-record/detail/${id}`,{headers:this.headers})
  }
  putrecord(id,data){
    return this.http.put(`${baseUrl}api/intervention-record/detail/${id}`,data,{headers:this.headers})
  }
  getbytitle(title){
    this.searchdata= this.http.get(`${baseUrl}api/intervention-record/search/${title}`,{headers:this.headers}).subscribe(data=>{this.searchdata=data});
    console.log(this.searchdata)
    return this.http.get(`${baseUrl}api/intervention-record/search/${title}`,{headers:this.headers});
  }
}
