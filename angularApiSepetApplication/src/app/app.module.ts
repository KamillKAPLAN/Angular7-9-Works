import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

// notification added
import {SimpleNotificationsModule, NotificationsService} from 'angular2-notifications';

// COMPONENTS
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {CategoryComponent} from './category/category.component';
import {CartComponent} from './cart/cart.component';
import {AccountComponent} from './account/account.component';
import {ShippingDetailComponent} from './shipping-detail/shipping-detail.component';
import {CartSummaryComponent} from './cart/cart-summary/cart-summary.component';
import {LoggedComponent} from './account/logged/logged.component';
import {NotFoundComponent} from './not-found/not-found.component';

// GLOBAL SERVICES
import {CartService} from './cart/cart.service';

// PIPE
import {VatAddedPipe} from './product/vat-added.pipe';
import {ProductFilterPipe} from './product/product-filter.pipe';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'products/:seoUrl',
    component: ProductComponent
  },
  {
    path: 'myCart',
    component: CartComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: 'apiURL', useValue: 'http://northwindapi.azurewebsites.net/api'},
    NotificationsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
