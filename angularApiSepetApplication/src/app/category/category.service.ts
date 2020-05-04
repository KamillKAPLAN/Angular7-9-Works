import {Injectable, Inject} from '@angular/core';
import {CategoryModel} from './category.model';
import {HttpClient, HttpResponse} from '@angular/common/http';
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
export class CategoryService {

  constructor(private http: HttpClient, @Inject('apiURL') private apiUrl) {
  }

  url: string = this.apiUrl + '/categories';

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get(this.url).map(response => response as CategoryModel[] || []);
  }
}
