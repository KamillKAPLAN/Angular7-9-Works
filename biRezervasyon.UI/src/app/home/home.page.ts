import {Component} from '@angular/core';
import {
    adultOfPeopleList, budgetPayEnd,
    budgetPayStart,
    childOfPeopleList,
    cityList,
    typeList
} from '../providers/holiday.mock';
import {HolidayModel} from '../models/holiday.model';
import {HolidayService} from '../providers/holiday.service';
import {log} from 'util';
import {Router} from '@angular/router';
import {MbscFormOptions} from '@mobiscroll/angular';

const monthNames = ['Oca', 'Şu', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    page = 'page1';
    nextMsg = 'Gönder';

    cities: any[];
    types: any[];
    people: any[];
    childeren: any[];
    budgetPayStart: any[];
    budgetPayEnd: any[];
    start: number;

    oneChild: any;
    twoChild: any;
    threeChild: any;

    modal: boolean;

    startDate: string;
    endDate: string;
    showDate = true;
    // @ts-ignore
    holidayData: HolidayModel = new HolidayModel();

    constructor(private holidayService: HolidayService, private router: Router) {
        this.cities = Object.assign([], cityList);
        this.types = Object.assign([], typeList);
        this.people = Object.assign([], adultOfPeopleList);
        this.childeren = Object.assign([], childOfPeopleList);
        this.budgetPayStart = Object.assign([], budgetPayStart);
        this.budgetPayEnd = Object.assign([], budgetPayEnd);
    }

    cityChanged(name: string) {
        const dataValue = this.holidayData.city_names.find(x => x === name);
        const data = this.cities.find(x => x.name === name);
        if (dataValue === undefined) {
            data.isChecked = true;
            this.holidayData.city_names.push(name);
            // console.log(this.holidayData.city_name);
        } else {
            data.isChecked = false;
            const index = this.holidayData.city_names.findIndex(x => x === name);
            this.holidayData.city_names.splice(index, 1);
        }
    }

    cityIsChecked(name: string): boolean {
        const dataValue = this.holidayData.city_names.find(x => x === name);
        if (dataValue === undefined) {
            return false;
        } else {
            return true;
        }
    }

    typeChanged(name: string) {
        const dataValue = this.holidayData.type_names.find(x => x === name);
        const data = this.types.find(x => x.name === name);
        if (dataValue === undefined) {
            data.isChecked = true;
            this.holidayData.type_names.push(name);
            // console.log(this.holidayData.type_name);
        } else {
            data.isChecked = false;
            const index = this.holidayData.type_names.findIndex(x => x === name);
            this.holidayData.type_names.splice(index, 1);
        }
    }

    typeIsChecked(name: string): boolean {
        const dataValue = this.holidayData.type_names.find(x => x === name);
        if (dataValue === undefined) {
            return false;
        } else {
            return true;
        }
    }

    formSettings: MbscFormOptions = {
        lang: 'tr',
        theme: 'ios'
    };

    sliderSettings: MbscFormOptions = {
        // tslint:disable-next-line:only-arrow-functions
        onInit: function(event, inst) {
            const slider = document.getElementById('slider');
            const labels = slider.querySelectorAll('.mbsc-progress-step-label');

            for (let i = 0; i < labels.length; ++i) {
                labels[i].innerHTML = monthNames[i];
            }
        }.bind(this)
    };

    slider6 = [18.88, 72.72];

    peopleChanged(count: number) {
        this.people.filter(x => x.isChecked = false);
        // @ts-ignore
        this.holidayData.people_number = count.detail.value;
        // @ts-ignore
        const data = this.people.find(x => x.count === count.detail.value);
        data.isChecked = true;
    }

    childValue(count: number) {
        // seçili olan çocuk sayısını struct'daki değere atadım.
        this.childeren.filter(x => x.isChecked = false);
        // @ts-ignore
        this.holidayData.child_number = count.detail.value;
        // @ts-ignore
        const data = this.childeren.find(x => x.count === count.detail.value);
        data.isChecked = true;
        // console.log(this.holidayData.child_number);
    }

    monthChanged(month: number) {
        // çocukların yaşlarını eklme işlemi yapılıyor. -- BEGIN
        if (this.holidayData.child_number === 0) {
            this.holidayData.childeren_ages.push('Çocuk Bulunmamaktadır.');
        }
        if (this.holidayData.child_number === 1 && this.oneChild !== undefined) {
            this.holidayData.childeren_ages.push(this.oneChild);
        }
        if (this.holidayData.child_number === 2 && this.oneChild !== undefined && this.twoChild !== undefined) {
            this.holidayData.childeren_ages.push(this.oneChild, this.twoChild);
        }
        // tslint:disable-next-line:max-line-length
        if (this.holidayData.child_number === 3 && this.oneChild !== undefined && this.twoChild !== undefined && this.threeChild !== undefined) {
            this.holidayData.childeren_ages.push(this.oneChild, this.twoChild, this.threeChild);
        }
        // çocukların yaşlarını eklme işlemi yapılıyor. -- END

        this.holidayData.start_date = month[0];
        this.holidayData.end_date = month[1];
    }

    budgetStartChanged(selectedVal: string) {
        this.budgetPayStart.filter(x => x.isChecked = false);
        // @ts-ignore
        this.holidayData.budget_pay_start = selectedVal.detail.value;
        // @ts-ignore
        const data = this.budgetPayStart.find(x => x.count === selectedVal.detail.value);
        data.isChecked = true;
        this.start = this.holidayData.budget_pay_start;
        data.isChecked = false;
        // @ts-ignore
        console.log('Start: ', selectedVal.detail.value);
    }

    budgetEndChanged(selectedVal: string) {
        this.budgetPayEnd.filter(x => x.isChecked = false);
        // @ts-ignore
        this.holidayData.budget_pay_end = selectedVal.detail.value;
        // @ts-ignore
        const data = this.budgetPayEnd.find(x => x.count === selectedVal.detail.value);
        data.isChecked = true;
        // @ts-ignore
        console.log('End: ', selectedVal.detail.value);
    }

    contactInfo() {
        for (const item of this.holidayData.city_names) {
            this.holidayData.city_name += item + ', ';
        }
        for (const item of this.holidayData.type_names) {
            this.holidayData.type_name += item + ', ';
        }
        for (const item of this.holidayData.childeren_ages) {
            this.holidayData.child_age += item + ', ';
        }

        this.holidayData.city_name = this.holidayData.city_name.substring(0, this.holidayData.city_name.length - 1);
        this.holidayData.type_name = this.holidayData.type_name.substring(0, this.holidayData.type_name.length - 1);
        // tslint:disable-next-line:max-line-length
        this.holidayData.child_age = this.holidayData.child_age.substring(0, this.holidayData.child_age.length - 1);

        console.log(this.holidayData);
        const atDogrulama = this.holidayData.user_email.indexOf('@');
        const comDogrulama = this.holidayData.user_email.lastIndexOf('.');
        if (atDogrulama !== -1 && comDogrulama !== -1) {
            this.page = 'page7';
            this.modal = true;
        } else {
            this.modal = false;
        }
    }

    register() {
        this.holidayService.postHoliday(this.holidayData);
    }

    popUpFinish() {
        this.page = 'page1';
        this.oneChild = 0;
        this.twoChild = 0;
        this.threeChild = 0;
        this.people.filter(x => x.isChecked = false);
        this.childeren.filter(x => x.isChecked = false);
        this.budgetPayStart.filter(x => x.isChecked = false);
        this.budgetPayEnd.filter(x => x.isChecked = false);
        // @ts-ignore
        this.holidayData = new HolidayModel();
        this.router.navigateByUrl('/home');
    }

}
