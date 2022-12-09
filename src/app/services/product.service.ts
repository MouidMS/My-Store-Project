import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../model/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private conn: HttpClient) {}

  showProduct(): Observable<ProductModel[]> {
    return this.conn.get<ProductModel[]>('../assets/data.json');
  }
}
