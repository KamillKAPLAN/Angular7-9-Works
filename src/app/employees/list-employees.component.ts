import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees : Employee[] = [
    {
      id : 1, 
      name : 'Mark',
      gender : 'Male',
      contactPreference : 'Email',
      email : 'mark@pragimtech.com',
      dateOfBirth : new Date('10/25/1988'),
      department : 'IT',
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
      department : 'HR',
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
      department : 'IT',
      isActive :true,
      photoPath : 'assets/images/img3.png'
    },
    {
      id : 4, 
      name : 'Kamil',
      gender : 'Male',
      contactPreference : 'Eamil',
      email : 'kamilkaplnn@gmail.com',
      dateOfBirth : new Date('3/5/1994'),
      department : 'B1',
      isActive :true,
      photoPath : 'assets/images/img4.png'
    }
  ];  
  constructor() { }

  ngOnInit() {
  }

}
