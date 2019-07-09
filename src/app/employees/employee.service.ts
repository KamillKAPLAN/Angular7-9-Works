import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  
  baseUrl = 'http://localhost:3000/employees';

  getEmployees(): Observable<Employee[]> {
    // return Observable.of(this.listEmployees).delay(2000);
    return this.httpClient.get<Employee[]>(this.baseUrl).delay(500)
      .catch(this.handleError);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error: ', errorResponse.error.message);
    } else {
      console.log('Server Side Error: ', errorResponse);
    }
    return new ErrorObservable('There is a problem with the service. We are notified & working on it. Please try again later.');
  }

  getEmployee(getId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${getId}`)
      .catch(this.handleError);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .catch(this.handleError);
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .catch(this.handleError);
  }

  

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
      .catch(this.handleError);   
  }
}