import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartModel } from 'src/app/model/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-itme',
  templateUrl: './cart-itme.component.html',
  styleUrls: ['./cart-itme.component.css'],
})
export class CartItmeComponent implements OnInit {
  @Input() item!: CartModel[];
  @Input() product!: CartModel;
  @Output() change: EventEmitter<CartModel[]> = new EventEmitter();
  order!: string;

  constructor(private serCart: CartService) {}

  ngOnInit(): void {
    this.order = this.product.order;
  }

  Change(item: CartModel) {
    const sort = this.item.indexOf(item);
    this.item[sort] = item;
    this.item[sort].order = this.order;
    if (parseInt(this.order) > 0) {
      this.serCart.addToCartProducts(this.item);
      alert(`${item.name} changed `);
    } else {
      alert(`${item.name} removed form your cart`);
      this.serCart.removeFromCart(item);
    }
    this.change.emit(this.item);
    window.location.reload();
  }
}
