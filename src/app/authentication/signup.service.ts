import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  httpheaders = new HttpHeaders({ 'Content-Type':'application/json' })
  constructor( private httpclient : HttpClient ){ }


  createNewUser( newUserDetails : {}): Observable<{}>{
    let signupAPI:string = 'http://127.0.0.1:8000/signup/';
    return this.httpclient.post(
      signupAPI,
      newUserDetails,
      {headers: this.httpheaders}
    )
  }

}