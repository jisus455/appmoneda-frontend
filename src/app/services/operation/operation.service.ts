import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  url = 'http://localhost:8080/operation/'

  constructor(private http: HttpClient) { }

  getOperation(ctaOrg:string, ctaDst:string) {
    return this.http.get(this.url+'?ctaOrg='+ctaOrg+'&ctaDst='+ctaDst)
  }

  getLastOperation(ctaOrg:string, ctaDst:string, limit:string) {
    return this.http.get(this.url+'?ctaOrg='+ctaOrg+'&ctaDst='+ctaDst+'&limit='+limit)
  }

  addOperation(body:any) {
    return this.http.post(this.url, body)
  }
}
