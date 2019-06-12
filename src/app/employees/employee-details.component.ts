import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  constructor(private _route: ActivatedRoute,
              private _employeeService: EmployeeService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');   
    this.employee = this._employeeService.getEmployee(id);
  }

}
