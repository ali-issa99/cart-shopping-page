import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  

   cartitems=[
    {id:1,productid:1,productname:'test 1',qty:4,price:33},
    {id:2,productid:2,productname:'test 2',qty:6,price:10},
    {id:3,productid:3,productname:'test 3',qty:7,price:150},
    {id:4,productid:4,productname:'test 4',qty:2,price:50},
    {id:5,productid:5,productname:'test 5',qty:1,price:123}
  ];


 public  cartTotal=0

  constructor() { }

  ngOnInit(): void  {
       this.cartitems.forEach(item => {
       this.cartTotal += (item.qty*item.price)
       
     });
  }

}
