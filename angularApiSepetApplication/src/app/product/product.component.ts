import {Component, OnInit} from '@angular/core';
import {ProductModel} from './product.model';
import {ProductService} from './product.service';
import {NotificationsService} from 'angular2-notifications';
import {CartService} from '../cart/cart.service';
import {ActivatedRoute} from '@angular/router';
import {Pager} from '../app-pager';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: ProductModel[];
  addedProduct: ProductModel;
  pager: Pager = new Pager();

  constructor(private productService: ProductService,
              private notificationService: NotificationsService,
              private cartService: CartService,
              private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.getProducts(params['seoUrl']);
    });
  }

  getProducts(seoUrl: string) {
    this.productService.getProducts(seoUrl).subscribe(
      (datas) => {
        this.products = datas;
        this.pager = this.getPager(datas.length);
      }
    );
  }

  addToCart(product: ProductModel) {
    this.addedProduct = product;
    this.cartService.addToCart(product);
    this.notificationService.success('Başarılı ', product.productName + ' sepete eklendi');
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5): Pager {
    let totalPages = Math.ceil(totalItems / pageSize);

    let pages: Array<number> = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    var pager = new Pager();
    pager.currentPage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;

    return pager;
  }

  setPage(page: number) {
    this.pager.currentPage = page;

  }
}
