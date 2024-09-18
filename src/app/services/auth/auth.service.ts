import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/client/'

  constructor(private http:HttpClient) { }

  registerClient(body:any) {
    return this.http.post(this.url, body)
  }

  loginClient(body:any) {
    return this.http.post(this.url, body)
  }
}
