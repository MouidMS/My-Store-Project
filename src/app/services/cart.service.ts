import { Injectable } from '@angular/core';
import { CartModel } from '../model/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  myStorage = window.localStorage;

  constructor() {}

  getCartProducts(): CartModel[] | [] {
    const Items = this.myStorage.getItem('item');
    return Items ? JSON.parse(Items) : [];
  }

  addToCartProducts(cartProduct: CartModel[]): void {
    this.myStorage.setItem('item', JSON.stringify(cartProduct));
  }
  removeFromCart(cartProduct: CartModel): void {
    let cartProducts = this.getCartProducts().filter(
      (item) => item.id != cartProduct.id
    );
    this.clearCart();
    this.addToCartProducts(cartProducts);
  }

  clearCart(): void {
    this.myStorage.clear();
  }
}
