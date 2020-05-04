import {Inject, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HolidayModel} from '../models/holiday.model';

@Injectable({
    providedIn: 'root'
})
export class HolidayService implements OnInit {

    constructor(private http: HttpClient,
                @Inject('apiURL') private apiUrl) {
    }

    ngOnInit() {
    }

    postHoliday(dbHoliday: HolidayModel) {
        this.http.post<HolidayModel>(this.apiUrl + '/reservation', dbHoliday).subscribe(
            value => {
                console.log(value);
            },
            err => console.log(err)
        );
    }

    getHoliday() {
        return this.http.get(this.apiUrl + '/reservations');
    }
}
