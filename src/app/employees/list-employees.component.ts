import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

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
              private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.filteredEmployees = this.employees;
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId])
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
