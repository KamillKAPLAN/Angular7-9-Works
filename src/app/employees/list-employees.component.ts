import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees : Employee[]; 
  filteredEmployees : Employee[];  

  private _searchTerm: string;
  get searchTerm(): string{
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filtereEmployees(value);
  }

  filtereEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1    
    );
  }

  constructor(private _employeeService : EmployeeService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.filteredEmployees = this.employees;
    }
    // console.log(this._route.snapshot.queryParamMap.has('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.get('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.getAll('searchTerm'));
    // console.log(this._route.snapshot.queryParamMap.keys);
    // console.log(this._route.snapshot.paramMap.keys);
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId],{
      queryParams : { 'searchTerm' : this._searchTerm, 'testParam' : 'testValue'}
    });
  }

  changeEmployeeName() {
    this.employees[0].name = 'Merhaba B1 Company';
    this.filteredEmployees = this.filtereEmployees(this.searchTerm);
    // const newEmployeeArray: Employee[] = Object.assign([],this.employees);
    // newEmployeeArray[0].name = 'Merhaba B1 Company';
    // this.employees = newEmployeeArray;
  }

  onMouseMove() {

  }
}
