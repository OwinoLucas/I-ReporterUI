import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl='http://127.0.0.1:8000/api/flags';

@Injectable({
  providedIn: 'root'
})
export class FlagapiService {

  constructor(private http:HttpClient) { }

  getAll() {
      return this.http.get(baseUrl);
    }
}
