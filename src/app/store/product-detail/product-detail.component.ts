import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartModel } from 'src/app/model/Cart';
import { ProductModel } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  pros!: ProductModel[];

  product!: ProductModel;
  id: any = 0;
  order: any = 1;
  count: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private router: ActivatedRoute,
    private serCart: CartService,
    private serProduct: ProductService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((prs) => {
      this.id = Number(prs.get('id'));
    });
    this.serProduct.showProduct().subscribe((res) => {
      this.pros = res;
      this.product = this.pros.filter((product) => product.id === this.id)[0];
    });
  }

  onSubmit(): void {
    const itmes: CartModel[] = this.serCart.getCartProducts();
    let item = itmes.find((item) => item.id === this.product.id);
    if (item) {
      item.order = this.order;
      item ? this.serCart.addToCartProducts(itmes) : null;
      alert(`changed ${this.product.name}`);
    } else {
      itmes.push(Object.assign(this.product, { order: this.order }));
      this.serCart.addToCartProducts(itmes);
      alert(`New Item! '${this.product.name}' added to cart`);
    }
  }

}

