import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../interfaces/iproducts';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  newProd: IProducts = {
    name: '',
    qta: 0,
    prezzo: 0,
    descrizione: '',
  }

  nameButton = 'Aggiungi prodotto'

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.productsService.getProductById(params.id).subscribe(response => this.newProd = response)
        console.log(params.id)
        this.nameButton = 'Aggiorna prodotto'
      } else {
        console.log('Nessun parametro')
      }
    })
  }

  saveProduct() {
    if (this.newProd.name != '' && this.newProd.descrizione != '') {
      if(!this.newProd.id) {
        console.log('Prodotto creato!')
        console.log(this.newProd);
        this.productsService.insertProduct(this.newProd).subscribe(response => {console.log(response); this.router.navigate(['products'])});
      } else {
        this.productsService.updateProduct(this.newProd).subscribe(response => {console.log(response); this.router.navigate(['products'])});
        console.log('Prodotto aggiornato!')
      }
      
    } else {
      alert('Compila tutti i campi!')
    }
  }

}
