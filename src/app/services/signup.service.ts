import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }
  private url='http://127.0.0.1:8000/api';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  });
  getAllUsers()
  {
    return this.httpClient.get(`${this.url}/users`)
  }
  getUser(id:any)
  {
    return this.httpClient.get(`${this.url}/user/${id}`)
  }
  addUser(newUser:any)
  {
    return this.httpClient.post(`${this.url}/user/register`,newUser)
  }
}
