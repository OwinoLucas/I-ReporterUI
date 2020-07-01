import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const allProfilesUrl = 'http://127.0.0.1:8000/api/profiles/';
const singleProfileUrl = 'http://127.0.0.1:8000/api/profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  token = JSON.parse(localStorage.getItem('token'));
  headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`)

  constructor(private http: HttpClient) { }

  get(user) {
    return this.http.get(`${singleProfileUrl}/${user}`, { headers: this.headers });
  }

  create(data) {
    return this.http.post(allProfilesUrl, data, { headers: this.headers });
  }

  update(user, data) {
    return this.http.put(`${singleProfileUrl}/${user}`, data, { headers: this.headers });
  }
}
