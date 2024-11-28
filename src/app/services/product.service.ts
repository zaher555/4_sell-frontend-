import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  private url='http://127.0.0.1:8000/api';
  getAllProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(`${this.url}/products`)
  }
  getProduct(id:any):Observable<Product>
  {
    return this.http.get<Product>(`${this.url}/product/${id}`)
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
  // }}
}