import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DirectoryComponent} from './directory/directory.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {routing} from './app.routes';
import {FilterPipe} from './filter.pipe';
import {LoggingService} from '../providers/logging.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DirectoryComponent,
        AddEmployeeComponent,
        PageNotFoundComponent,
        FilterPipe,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        routing
    ],
    providers: [
        LoggingService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
