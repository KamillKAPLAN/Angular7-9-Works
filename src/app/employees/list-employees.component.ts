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
  constructor(private _employeeService : EmployeeService,
              private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  onClick(employeeId: number) {
    this._router.navigate(['/employees', employeeId])
  }

  changeEmployeeName() {
    // this.employees[0].name = 'Merhaba B1 Company';
    const newEmployeeArray: Employee[] = Object.assign([],this.employees);
    newEmployeeArray[0].name = 'Merhaba B1 Company';
    this.employees = newEmployeeArray;
  }
}
