import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './store/header/header.component';
import { ProductComponent } from './store/product/product.component';
import { ProductListComponent } from './store/product-list/product-list.component';
import { CartComponent } from './store/cart/cart.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormUserComponent } from './store/form-user/form-user.component';
import { CartItmeComponent } from './store/cart-itme/cart-itme.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './store/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    ProductDetailComponent,
    FormUserComponent,
    CartItmeComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
})
export class AppModule {}
