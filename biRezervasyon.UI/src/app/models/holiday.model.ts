export class HolidayModel {
    city_names: string[];
    type_names: string[];
    city_name: string;
    type_name: string;
    people_number: number;
    child_number: number;
    childeren_ages: string[];
    child_age: string;
    budget_pay_start: number;
    budget_pay_end: number;
    start_date: string;
    end_date: string;
    day_count: number;
    room_count: number;
    user_fname_lname: string;
    user_phone_number: string;
    user_email: string;
    user_description: string;

    constructor(
        city_names = [],
        type_names = [],
        city_name = '',
        type_name = '',
        people_number = 0,
        child_number = -1,
        childeren_ages = [],
        child_age = '',
        budget_pay_start: -1,
        budget_pay_end: 0,
        star_date = '',
        end_date = '',
        day_count = 0,
        room_count = 0,
        user_fname_lname = '',
        user_phone_number = '',
        user_email = '',
        user_description = ''
    ) {
        this.city_names = city_names;
        this.city_name = city_name;
        this.type_names = type_names;
        this.type_name = type_name;
        this.people_number = people_number;
        this.child_number = child_number;
        this.childeren_ages = childeren_ages;
        this.child_age = child_age;
        this.budget_pay_start = budget_pay_start;
        this.budget_pay_end = budget_pay_end;
        this.start_date = star_date;
        this.end_date = end_date;
        this.day_count = day_count;
        this.room_count = room_count;
        this.user_fname_lname = user_fname_lname;
        this.user_phone_number = user_phone_number;
        this.user_email = user_email;
        this.user_description = user_description;
    }
}

