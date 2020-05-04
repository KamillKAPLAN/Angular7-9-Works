import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeModel} from '../models/employe';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private _url = 'http://dummy.restapiexample.com/api/v1/employees';

    constructor(private http: HttpClient) {
    }

    fetchData() {
        return this.http.get<EmployeModel[]>(this._url);
    }
}
