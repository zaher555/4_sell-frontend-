import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { Product } from '../../model/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-product',
  standalone: true,
  imports: [],
  templateUrl: './category-product.component.html',
  styleUrl: './category-product.component.css'
})
export class CategoryProductComponent implements OnInit,OnDestroy {
  constructor(private categoryService:CategoryService,private productService:ProductService){}
  categories:Category[]=[]
  products:Product[]=[]
  cancelSubscription!:Subscription
  ngOnInit(): void {
    this.allCategories();
    this.allProducts();
  }
  allCategories()
  {
    this.categoryService.getAllCategories().subscribe({
      next:((data:Category[])=>{
        console.log(data);
        this.categories=data
      }),
      error:((err)=>{
        console.log('error');
      })
    })
  }
  allProducts()
  {
    this.productService.getAllProducts().subscribe({
      next:((data:Product[])=>{
        console.log(data);
        this.products=data
      }),
      error:((err)=>{
        console.log('error');
      })
    })
  }
  ngOnDestroy(): void {
    this.cancelSubscription.unsubscribe();
  }
}
