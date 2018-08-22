import { Component, OnInit } from '@angular/core';
import { Product } from './../shared/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: object = {};
  productsList: any = [];
  productImages = ['watch1.jpg', 'watch2.jpg', 'watch3.jpg', 'watch4.jpg', 'watch5.jpg', 'watch6.jpg', 'watch7.jpg', 'watch8.jpg', 'watch9.jpg', 'watch10.jpg'];
  constructor() { }

  ngOnInit() {
  }

  addProduct(data: any) {
    let temp: Product = {};
    let tempid = Date.now();
    temp.id = tempid;
    temp.productName = data.productname;
    temp.productPrice = data.productprice;
    temp.productDescription = data.productdescription;
    temp.productImage = data.productimage;
    temp.isOfferProduct = data.productoffer;
    
    this.productsList.push(temp);
    this.product = {};
  }

  offerPriceCalculation(price:number){ 
    return  (price - (( price * 10 ) /100)) ;
  }

  deleteProduct(id: any) {
    var found = this.productsList.filter(function (element) {
      return element.id != id;
    });
    this.productsList = found;
  }
}
