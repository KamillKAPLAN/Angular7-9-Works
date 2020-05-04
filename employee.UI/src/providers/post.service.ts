import {Injectable} from '@angular/core';
import {PostModel} from '../models/post';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    _url: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {
    }

    getPosts(): Observable<PostModel[]> {
        return this.http.get<PostModel[]>(this._url);
    }
}
