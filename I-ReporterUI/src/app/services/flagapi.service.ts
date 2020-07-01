import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const baseUrl='http://127.0.0.1:8000/';

@Injectable({
  providedIn: 'root'
})
export class FlagapiService {
  searchdata:any
  token=JSON.parse(localStorage.getItem('token'));
  headers=new HttpHeaders().set("Authorization",`Bearer ${this.token}` )

  constructor(private http:HttpClient) { }

  create(data){
    return this.http.post(`${baseUrl}api/flags/create/`,data,{headers:this.headers})
  }
  getAll(){
    return this.http.get(`${baseUrl}api/flags/`,{headers:this.headers})
  }
  get(id){
    return this.http.get(`${baseUrl}api/flag/detail/${id}`,{headers:this.headers});
  }
  delete(id){
    return this.http.delete(`${baseUrl}api/flag/detail${id}`,{headers:this.headers})
  }
  putrecord(id,data){
    return this.http.put(`${baseUrl}/${id}api/flag/detail${id}`,data,{headers:this.headers})
  }
}
