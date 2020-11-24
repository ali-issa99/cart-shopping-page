import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'product 1', 'this is the product 1 description', 100,"/assets/01.jpg"),
    new Product(2, 'product 2', 'this is the product 2 description', 200,"/assets/2.jpg"),
    new Product(3, 'product 3', 'this is the product 3 description', 350,"/assets/3.jpg"),
    new Product(4, 'product 4', 'this is the product 4 description', 400,"/assets/download.jpg"),
    new Product(5, 'product 5', 'this is the product 5 description', 500,"/assets/4.jpg"),
    new Product(6, 'product 5', 'this is the product 5 description', 50,"/assets/5.jpg"),
    new Product(7, 'product 5', 'this is the product 5 description', 150,"/assets/images.jpg"),

  ]

  constructor() { }

  getProducts(): Product[] {
    
    return this.products

  }

}

