export class Product {
  id:number;
  name:string;
  description:string;
  price:number;
  imageurl:string;


  constructor(id,name,description='',price=0,imageurl="https://th.bing.com/th/id/OIP.mzpJWQUjOq0stjop6RiOYgHaE8?w=257&h=180&c=7&o=5&dpr=1.5&pid=1.7"){
  this.id=id
  this.name=name
  this.description=description
  this.imageurl=imageurl
  this.price=price


  }

}
