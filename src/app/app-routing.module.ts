import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './store/cart/cart.component';
import { ConfirmComponent } from './store/confirm/confirm.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';
import { ProductListComponent } from './store/product-list/product-list.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: '', component: ProductListComponent },
  { path: 'checkout/:name/:total', component: ConfirmComponent },
  { path: ':id/product', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
