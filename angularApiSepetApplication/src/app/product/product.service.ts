import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ProductModel} from './product.model';
import {Observable} from 'rxjs/Observable';

/* gelen response datayı istediğimiz nesneye map etmek için kullanılır. */
import 'rxjs/add/operator/map';
/* data geldiğinde yapmasını istedğimiz işlemi anlatır. */
import 'rxjs/add/operator/do';
/* bir hata olduğunda yapılması istediğimiz işlemi yazarız. */
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, @Inject('apiURL') private apiURL) {
  }

  getProducts(seoUrl: string): Observable<ProductModel[]> {
    if (seoUrl) {
      return this.http.get(this.apiURL + '/products/' + seoUrl)
        .map(res => res as ProductModel[] || []);
    } else {
      return this.http.get(this.apiURL + '/products')
        .map(res => res as ProductModel[] || []);
    }
  }
}
