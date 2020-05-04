import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {UserService} from '../providers/user/user.service';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AuthGuardService} from '../providers/guard/AuthGuard.service';
import {HttpRequestInterceptor} from './http-intercepted';

import {NgxPaginationModule} from 'ngx-pagination';
import {UserFilterPipe} from './user-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    UserService,
    AuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
