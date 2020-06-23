import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const AllProfilesUrl='http://127.0.0.1:8000/api/profiles';
const SingleProfileUrl='http://127.0.0.1:8000/api/profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) { }

  get(id){
    return this.http.get(`${SingleProfileUrl}/${id}`);
  }

  create(data){
    return this.http.post(AllProfilesUrl,data)
  }
}
