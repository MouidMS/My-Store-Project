import { Component } from '@angular/core';
import { faShopify } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  active: number = 1;
  shop = faShopify;

}
