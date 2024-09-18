import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = 'http://localhost:8080/account/'

  constructor(private http:HttpClient) { }

  getAccount(clientId:string) {
    return this.http.get(this.url+'?clienteId='+clientId)
  }

  addAccount(body:any) {
    return this.http.post(this.url, body)
  }

  deleteAccount(accountId:string) {
    return this.http.delete(this.url+'?cuentaId='+accountId) 
  }
}
