import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url = 'http://localhost:8080/currency/'

  constructor(private http:HttpClient) { }

  getCurrency() {
    return this.http.get(this.url)
  }

  getSearchCurrency(name:string) {
    return this.http.get(this.url+'?search='+name)
  }

  getOrderCurrency(option:string) {
    return this.http.get(this.url+'?order='+option)
  }

  getHistoryCurrency() {
    return ""
  }
}
