import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API =  environment.API

  constructor(private http: HttpClient) {
    
  }

  public login(data: any) {
    return this.http.post(`${this.API}/login`,data)
  }
  
  public register(data: any) {
    return this.http.post(`${this.API}/user`,data)
  }
}
