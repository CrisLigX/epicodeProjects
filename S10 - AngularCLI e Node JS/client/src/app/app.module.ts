import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DettaglioProdComponent } from './dettaglio-prod/dettaglio-prod.component';
import { CarrelloComponent } from './carrello/carrello.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/new',
    component: NewProductsComponent
  },
  {
    path: 'products/:id/edit',
    component: NewProductsComponent
  },
  {
    path: 'products/:id/buy',
    component: DettaglioProdComponent
  },
  {
    path: 'carrello/:id',
    component: CarrelloComponent
  },
  {
    path: 'carrello',
    component: CarrelloComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewProductsComponent,
    ProductsComponent,
    DettaglioProdComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
