import {Component, DoCheck, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {CartItemModel} from '../cartItem.model';
import {ProductModel} from '../../product/product.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {

  constructor(private cartService: CartService) {
  }

  totalCartItem: number;
  totalCartItemPrice: number;
  cartItems: CartItemModel[];

  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  ngDoCheck() {
    // reduce fonksiyonu kullanımı | a dönüş değeri, b listedeki her bir eleman
    this.totalCartItem = this.cartService.list().reduce((a, b) => a + b.quantity, 0);
    this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0);
  }

  remoceFromCart(product: ProductModel) {
      this.cartService.removeFromCart(product);
  }

}
