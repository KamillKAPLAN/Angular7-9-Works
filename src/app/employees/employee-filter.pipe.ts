import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPiPe implements PipeTransform {
    transform(employees: Employee[], searchTerm: string): Employee[] {
        if(!employees || !searchTerm) {
            return employees;
        }
        return employees.filter(employee =>
            employee.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1    
        );
    }
}