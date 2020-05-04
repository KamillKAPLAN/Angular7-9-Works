import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgModule} from '@angular/core';

​
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token_val');
​
        if (token) {
          const newReq = req.clone(
            {
              headers: req.headers.set('Authorization',
                'bearer ' + token)
            }
          );
          return next.handle(newReq);
        } else {
          return next.handle(req);
        }
  }
}
​
