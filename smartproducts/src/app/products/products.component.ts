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
  buttonText: string = "Add Product";
  productStaticImages = ['watch1.jpg', 'watch2.jpg', 'watch3.jpg', 'watch4.jpg', 'watch5.jpg', 'watch6.jpg', 'watch7.jpg', 'watch8.jpg', 'watch9.jpg', 'watch10.jpg'];
  constructor() { }

  ngOnInit() {
  }

  submit(data: any) {
    //console.log(data)  
    if ((data.productId === "0") || (typeof data.productId === "undefined")) {
      this.addProduct(data);
    } else {
      this.editProduct(data);
    }
  }

  addProduct(data: any) {
    let temp: Product = {};
    let tempid = Date.now();
    data.productId = tempid;
    this.productsList.push(data);
    console.log(this.productsList);
    this.product = {};
  }

  offerPriceCalculation(price: number) {
    return (price - ((price * 10) / 100));
  }

  editProduct(data: any) {    
    var findIndex = this.productsList.findIndex(product => product.productId === data.productId);
    this.productsList[findIndex] = data;
    this.product = {};
    this.buttonText = "Add Product";
  }

  viewProduct(id: any) {   
    this.product = this.findProduct(id);
    this.buttonText = "Edit Product";
  }

  deleteProduct(id: any) {
    var found = this.filterProduct(id);
    this.productsList = found;
  }

  filterProduct(id: any) {
    return this.productsList.filter(product => product.productId != id);
  }

  findProduct(id: any) {
    return this.productsList.find(product => product.productId === id);
  }
}
