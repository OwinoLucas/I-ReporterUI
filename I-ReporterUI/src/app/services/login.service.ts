import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8000';
const userUrl= 'http://127.0.0.1:8000/api/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  dat:any
  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    this.dat=localStorage.setItem('mail',JSON.stringify(data.email))
    console.log(this.dat)
    console.log("Server Response");
    return this.http.post(`${baseUrl}/api/login/`, data);

  }
  getuser(email){
    email=JSON.parse(localStorage.getItem('mail'))
    return this.http.get(`${userUrl}/${email}`);
  }
}
