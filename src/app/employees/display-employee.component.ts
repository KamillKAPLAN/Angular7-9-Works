import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input() employeeId: number;

  private _employee: Employee;

  @Input()
  set employee(val: Employee) {
    this._employee = val;
  }
  get employee(): Employee {
    return this._employee;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for(const propName of Object.keys(changes)) {
      //console.log(propName);
      const change = changes[propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);

      console.log(propName + ' changed from ' + from + ' to ' + to);
      
      
    }
  }
}
