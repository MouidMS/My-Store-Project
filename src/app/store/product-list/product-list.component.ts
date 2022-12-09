import { Component } from '@angular/core';
import { ProductModel } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  listProducts: ProductModel[] = [];

  constructor(private servecPro: ProductService) {}

  ngOnInit(): void {
    this.servecPro.showProduct().subscribe((prps) => {
      this.listProducts = prps;
    });
  }
}
