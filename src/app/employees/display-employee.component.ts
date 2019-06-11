import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  private _employeeId: number;
  @Input() 
  set employeeId(val: number) {
    console.log('employeeId changed from ' + 
      JSON.stringify(this._employeeId) + ' to ' + JSON.stringify(val));
    this._employeeId = val;
  } 
  get employeeId() {
    return this._employeeId;
  }

  private _employee: Employee;
  @Input()
  set employee(val: Employee) {
    console.log('employee changed from ' + 
      JSON.stringify(this._employee) + ' to ' + JSON.stringify(val));
    this._employee = val;
  }
  get employee(): Employee {
    return this._employee;
  }

  constructor() { }

  ngOnInit() {
  }

}
