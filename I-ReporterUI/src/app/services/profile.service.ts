import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const allProfilesUrl = 'http://127.0.0.1:8000/api/profiles/';
const singleProfileUrl = 'http://127.0.0.1:8000/api/profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) { }

  get(user) {
    return this.http.get(`${singleProfileUrl}/${user}`);
  }

  create(data) {
    return this.http.post(allProfilesUrl, data);
  }

  update(user, data) {
    return this.http.put(`${singleProfileUrl}/${user}`, data);
  }
}
