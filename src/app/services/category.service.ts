import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  private url='http://127.0.0.1:8000/api';
  getAllCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(`${this.url}/categories`)
  }
  getCategory(id:any)
  {
    return this.http.get(`${this.url}/categories/${id}`)
  }
  // addCategory()
  // {
  //   return this.http.post('url')
  // }
  // updateCategory()
  // {
  //   return this.http.put('url')
  // }
  // deleteCategory()
  // {
  //   return this.http.delete('url')
  // }
}
