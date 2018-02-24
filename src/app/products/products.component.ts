import { Component, OnInit } from '@angular/core';
import { Product } from '../product'; // data model
import { PRODUCTS } from '../mock-products'; // database


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {

  Products = PRODUCTS; // merging the database with it's subsequent data types layed out in the data model
  selectedProduct: Product = { // putting something here since something isn't always selected, like a starting point
    id: 2,
    productName: 'oranges',
    cost: 1.05,
    price: 2.67,
    description: '4lb bag of oranges',
    img: './assets/icons/bagoranges.png',
    stock: 2,
    quantity: 1
  }; // applying data model

  constructor() { }

  ngOnInit() { // What is this for?
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log(this.selectedProduct);
    // console.log(product);
  }

  manageInventory(stock, id, productName) { // SPLIT off into own component, fix span. add plus and minus buttons next to
    //  'stock' so that stock may be manipulated. add a 'save changes' button. This button should kick off a function
    // which utilizes a service to 'set' the new stock/overwrite/think arrow function on cartItemComponent.
    // Need to set mock-products to this localStorage, this is the data that will be manipulated, this is ultimately the data
    // that needs to be displayed.
    // PROBLEM WITH CSS tooltip:hover covering up with gear button.

    const span = document.getElementsByClassName('close')[0];
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    document.getElementById('stock').innerHTML = stock;
    document.getElementById('productName').innerHTML = productName;

    span.onclick = function() {
      modal.style.display = 'none';
    };
    window.onclick = function(event) {
      if (event.target === modal) { // (1 === '1') > is false ......  (1 == '1') > is true
      // !== same as === (equal); != same as == (not equal)
        modal.style.display = 'none';
      }
    };
  }

  confirmCartAdd(product: Product) { /*pulls up modal 2*/
// console.log(this.selectedProduct);
    this.selectedProduct = product;
    const span = document.getElementsByClassName('closeThis')[0];
    const modal = document.getElementById('confirmCartPopUp');
    modal.style.display = 'block';

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };


  }
}
