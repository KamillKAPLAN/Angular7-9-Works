import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm', {static: true}) public createEmployeeForm: NgForm;
  previewPhoto = false;
  panelTitle: string;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee;
  
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ];

  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY',
        showWeekNumbers: false
      });
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    })
  }

  private getEmployee(id: number) {
    if(id == 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: '',
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null
      }; 
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit Employee';
      this.employee = Object.assign({}, this._employeeService.getEmployee(id));
    }
  }

  saveEmployee(): void {
    const newEmployee: Employee = Object.assign({}, this.employee);
    this._employeeService.save(newEmployee);
    // this.createEmployeeForm.reset();
    this._router.navigate(['list']);
  }

  togglePhotPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
