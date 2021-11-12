import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../interfaces/iproducts';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  selProd: IProducts[] = []

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let carrello = localStorage.getItem('Carrello');
    if (carrello != null) {
      this.selProd = JSON.parse(carrello);
    }
  }

  svuotaCarrello() {
    localStorage.removeItem('Carrello');
    this.router.navigate(['/']);      
  }

}
