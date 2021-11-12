import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProducts } from '../interfaces/iproducts';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProducts[] = [];

  constructor(private ProductsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
    console.log(this.products)
  }

  removeProduct(obj: IProducts): void {
    this.ProductsService.deleteProduct(obj).subscribe(response => {this.getUser(), console.log(response)});
  }

  selectProduct(obj: IProducts): void {
    this.router.navigate(['products', obj.id, 'edit']);
  }

  evidenzaProduct(obj: IProducts): void {
    this.router.navigate(['products', obj.id, 'buy']);
  }

  getUser() {
    this.ProductsService.getAllProducts().subscribe(response => this.products = response);
  }

}
