import {Component, OnInit} from '@angular/core';
import {EmployeModel} from '../../models/employe';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

    employe: EmployeModel = new EmployeModel();

    constructor() {
    }

    ngOnInit() {
    }

    addEmployee() {
        if (this.employe.employee_name == '' || this.employe.employee_salary == '' || this.employe.employee_age == '') {
            alert('Boş bırakmayınız');
        }
        console.log(this.employe);
    }

}
