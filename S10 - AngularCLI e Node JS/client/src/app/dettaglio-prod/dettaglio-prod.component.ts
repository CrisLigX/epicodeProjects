import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../interfaces/iproducts';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-dettaglio-prod',
  templateUrl: './dettaglio-prod.component.html',
  styleUrls: ['./dettaglio-prod.component.css']
})
export class DettaglioProdComponent implements OnInit {


  selProd: IProducts = {
    id: 0,
    name: '',
    qta: 0,
    prezzo: 0,
    descrizione: '',
  }

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.productsService.getProductById(params.id).subscribe(response => this.selProd = response) });
  }

  aggiungiCarrello(): void {
    let carrello: IProducts[] = [];
    let carelloSalvato = localStorage.getItem('Carrello');
    if (carelloSalvato) {
      carrello = JSON.parse(carelloSalvato);
    }
    carrello.push(this.selProd);
    localStorage.setItem('Carrello', JSON.stringify(carrello));
    this.router.navigate(['carrello']);  
  }

}
