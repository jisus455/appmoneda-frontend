import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getCurrency() {
    return this.http.get(this.url+'currency')
  }

  getSearchCurrency(name:string) {
    return this.http.get(this.url+'currency?search='+name)
  }

  getAccount(clientId:string) {
    return this.http.get(this.url+'account?clienteId='+clientId)
  }

  createAccount(clientId:string, accountId:string) {
    return this.http.post(this.url+'account/', {
      'clienteId':clientId, 
      'tipoId':accountId
    })
  }

  deleteAccount(clientId:string, accountId:string) {
    return this.http.delete(this.url+'account/?clienteId='+clientId+'&tipoId='+accountId) 
  }

  getOperation(ctaOrg:string, ctaDst:string) {
    return this.http.get(this.url+'operation?ctaOrg='+ctaOrg+'&ctaDst='+ctaDst)
  }

  getClient() {
    return this.http.get(this.url+'client')
  }

}
