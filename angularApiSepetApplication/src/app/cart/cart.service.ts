import {Injectable} from '@angular/core';
import {ProductModel} from '../product/product.model';
import {CartItemModel} from './cartItem.model';
import {CART_ITEM_LIST} from './cartItemList';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: CartItemModel[];

  constructor() {
  }

  addToCart(product: ProductModel): void {
    const addedItem = CART_ITEM_LIST.find(t =>
      t.product.productId === product.productId);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      const cartItem = new CartItemModel();
      cartItem.product = product;
      cartItem.quantity = 1;
      /*eğer ürüm yoksa push ile ekleme işlemi yapıyoruz.*/
      CART_ITEM_LIST.push(cartItem);
    }
  }

  list(): CartItemModel[] {
    return CART_ITEM_LIST;
  }

  clear() {
    /*eğer ürüm yoksa splice ile silme işlemi yapıyoruz.*/
    CART_ITEM_LIST.splice(0, CART_ITEM_LIST.length);
  }

  removeFromCart(product: ProductModel) {
    const addedItem = CART_ITEM_LIST.find(t => t.product.productId === product.productId);
    const indexNo = CART_ITEM_LIST.indexOf(addedItem);
    // tslint:disable-next-line:triple-equals
    if (indexNo != -1) {
      CART_ITEM_LIST.splice(indexNo, 1);
    }
  }
}
