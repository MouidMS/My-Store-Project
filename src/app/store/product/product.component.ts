import { Component, Input } from '@angular/core';
import { CartModel } from 'src/app/model/Cart';
import { ProductModel } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() pro!: ProductModel;
  order: any = 1;
  number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private srCart: CartService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const itmes: CartModel[] = this.srCart.getCartProducts();
    let item = itmes.find((item) => item.id == this.pro.id);
    if (item) {
      item.order = this.order;
      item ? this.srCart.addToCartProducts(itmes) : null;
      alert(`changed ${this.pro.name}`);
    } else {
      itmes.push(Object.assign(this.pro, { order: this.order }));
      this.srCart.addToCartProducts(itmes);
      alert(`New Item! '${this.pro.name}' added to cart`);
    }
  }
}
