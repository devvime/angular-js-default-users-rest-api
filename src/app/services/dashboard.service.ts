import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  API =  environment.API

  constructor(private http: HttpClient) { 

  }

  public getUsers() {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('user_token')}`
    });    
    return this.http.get(`${this.API}/user`,{ headers: headers })
  }

  public register(data: any) {
    return this.http.post(`${this.API}/user`,data)
  }

  public delete(id: any) {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('user_token')}`
    });
    return this.http.delete(`${this.API}/user/${id}`, { headers: headers })
  }

  public getUser(id: any) {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('user_token')}`
    });    
    return this.http.get(`${this.API}/user/${id}`,{ headers: headers })
  }

  public update(data: any) {
    return this.http.put(`${this.API}/user`,data)
  }

}
