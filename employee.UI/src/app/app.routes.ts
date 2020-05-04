import {HomeComponent} from './home/home.component';
import {DirectoryComponent} from './directory/directory.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'employeeList', component: DirectoryComponent},
    {path: 'employeeAdd', component: AddEmployeeComponent},
    {path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
