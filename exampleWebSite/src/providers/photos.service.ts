import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PhotosModel } from 'src/models/photos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, x-Requested-With, Content-Type, Accept',
    'Response-Type': 'json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  baseURL: string = '/photos';

  constructor(private http: HttpClient, @Inject('apiURL') private apiUrl, ) { }

  getPhotos() {
    return this.http.get<PhotosModel[]>(this.apiUrl + this.baseURL, httpOptions);
  }
}
