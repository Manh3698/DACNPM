import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  public getNews(){
    return this.httpClient.get(`http://3.12.85.162/client`);
  }

  public login(){
    return this.httpClient.post(`http://3.12.85.162/user/login`,'')
  }
}
