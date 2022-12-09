import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartModel } from 'src/app/model/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  carts!: CartModel[];
  totalPrice: number = 0;
  constructor(private cartSer: CartService, private router: Router) {}

  ngOnInit(): void {
    this.carts = this.cartSer.getCartProducts();
    this.total();
  }

  total(): void {
    this.carts = this.cartSer.getCartProducts();
    this.totalPrice = this.carts.reduce((total, product) => {
      this.totalPrice = parseFloat(
        (total + product.price * parseInt(product.order)).toFixed(5)
      );
      return this.totalPrice;
    }, 0);
  }

  onSubmit(name: string) {
    this.cartSer.clearCart();
    this.router.navigate([`checkout/${name}/${this.totalPrice}`]);
  }

  onClearCart() {
    this.cartSer.clearCart();
    alert(`eveythings deleted.`);
    window.location.reload();
  }
}
