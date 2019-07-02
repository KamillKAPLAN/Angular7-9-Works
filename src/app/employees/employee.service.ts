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
    constructor(private httpClient: HttpClient) {}
    private listEmployees : Employee[] = [
        {
          id : 1, 
          name : 'Mark',
          gender : 'Male',
          contactPreference : 'Email',
          email : 'mark@pragimtech.com',
          dateOfBirth : new Date('10/25/1988'),
          department : '3',
          isActive :true,
          photoPath : 'assets/images/img1.png'
        },
        {
          id : 2, 
          name : 'Mary',
          gender : 'Female',
          contactPreference : 'Phone',
          phoneNumber : 2345978640,
          dateOfBirth : new Date('11/20/1979'),
          department : '2',
          isActive :true,
          photoPath : 'assets/images/img2.png'
        },
        {
          id : 3, 
          name : 'John',
          gender : 'Male',
          contactPreference : 'Phone',
          phoneNumber : 5432978640,
          dateOfBirth : new Date('3/25/1976'),
          department : '1',
          isActive :true,
          photoPath : 'assets/images/img3.png'
        },
        {
          id : 4, 
          name : 'Kamil',
          gender : 'Male',
          contactPreference : 'Email',
          email : 'kamilkaplnn@gmail.com',
          dateOfBirth : new Date('3/5/1994'),
          department : '5',
          isActive :true,
          photoPath : 'assets/images/img4.png'
        }
      ]; 

    getEmployees() : Observable<Employee[]> {
        // return Observable.of(this.listEmployees).delay(2000);
        return this.httpClient.get<Employee[]>('http://localhost:3000/employees').delay(500)
          .catch(this.handleError);
    }

    private handleError(errorResponse: HttpErrorResponse) {
      if ( errorResponse.error instanceof ErrorEvent ) {
        console.log('Client Side Error: ', errorResponse.error.message);        
      } else {
        console.log('Server Side Error: ', errorResponse);        
      }
      return new ErrorObservable('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    getEmployee(getId: number) : Employee {
      return this.listEmployees.find(e => e.id === getId)
    }

    save(employee: Employee): Observable<Employee> {
      if(employee.id === null) {
        return this.httpClient.post<Employee>('http://localhost:3000/employees', employee, {
          headers: new HttpHeaders({
            'Content-Type' : 'application/json'
          })
        })
        .catch(this.handleError);
      } else {
        const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id );
        this.listEmployees[foundIndex] = employee;
      }
    }

    countEmployee = this.listEmployees.length;
    
    deleteEmployee(id: number) {
      const i = this.listEmployees.findIndex(e => e.id === id);
      if(i !== -1) {
        this.listEmployees.splice(i, 1);
      }
    }
}