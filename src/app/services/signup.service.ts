import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

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
  getAllUsers():Observable <User[]>
  {
    return this.httpClient.get<User[]>(`${this.url}/users`)
  }
  getAllAdmins():Observable <User[]>
  {
    return this.httpClient.get<User[]>(`${this.url}/admins`)
  }
  getUser(id:any):Observable <User>
  {
    return this.httpClient.get<User>(`${this.url}/user/${id}`)
  }
  addUser(newUser:any):Observable<User>
  {
    return this.httpClient.post<User>(`${this.url}/user/register`,newUser)
  }
}
