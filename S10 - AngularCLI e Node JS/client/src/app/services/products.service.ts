import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../interfaces/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlAPI = 'http://localhost:3000/product/'

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<IProducts[]>(this.urlAPI);
  }

  getProductById(id: any) {
    return this.http.get<IProducts>(this.urlAPI + id)
  }

  deleteProduct(obj: IProducts) {
    return this.http.delete(this.urlAPI + obj.id);
  }

  insertProduct(obj: IProducts) {
    return this.http.post<IProducts>(this.urlAPI, obj);
  }

  updateProduct(item: IProducts) {
    return this.http.put<IProducts>(this.urlAPI + item.id, item);
  }

}
