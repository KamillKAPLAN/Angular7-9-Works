import {Component, OnInit} from '@angular/core';
import {CartItemModel} from './cartItem.model';
import {ProductModel} from '../product/product.model';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  isProductRemoved: boolean = false;
  cartItems: CartItemModel[] = [];

  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: ProductModel) {
    if (confirm('Sepetten çıkarmak istediğinize emin misiniz?')) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
    }
  }


}
