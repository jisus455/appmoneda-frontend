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

  getOrderCurrency(option:string) {
    return this.http.get(this.url+'currency?order='+option)
  }

  
  
  getAccount(clientId:string) {
    return this.http.get(this.url+'account?clienteId='+clientId)
  }

  addAccount(body:any) {
    return this.http.post(this.url+'account/', body)
  }

  deleteAccount(clientId:string, accountId:string) {
    return this.http.delete(this.url+'account/?clienteId='+clientId+'&tipoId='+accountId) 
  }
  
  
  
  getOperation(ctaOrg:string, ctaDst:string) {
    return this.http.get(this.url+'operation?ctaOrg='+ctaOrg+'&ctaDst='+ctaDst)
  }

  getLastOperation(ctaOrg:string, ctaDst:string, limit:string) {
    return this.http.get(this.url+'operation?ctaOrg='+ctaOrg+'&ctaDst='+ctaDst+'&limit='+limit)
  }

  addOperation(body:any) {
    return this.http.post(this.url+'operation/', body)
  }



  registerClient(body:any) {
    return this.http.post(this.url+'client', body)
  }

  loginClient(body:any) {
    return this.http.post(this.url+'client', body)
  }

}
