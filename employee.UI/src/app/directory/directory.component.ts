import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../../providers/logging.service';
import {DataService} from '../../providers/data.service';

@Component({
    selector: 'app-directory',
    templateUrl: './directory.component.html',
    styleUrls: ['./directory.component.css'],
    providers: [DataService]
})
export class DirectoryComponent implements OnInit {

    employees = [];
    term: string;

    constructor(private logging: LoggingService, private data: DataService) {
    }

    ngOnInit() {
        this.data.fetchData()
            .subscribe((data) => this.employees = data
            );
    }

    logIt() {
        this.logging.lg();
    }

}
