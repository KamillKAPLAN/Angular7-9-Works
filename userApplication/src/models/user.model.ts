import has = Reflect.has;

export class UserModel {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: number;
  company: string;
  active: boolean;
  address: string;
  hash: string;

  constructor(id = 0,
              first_name = '',
              last_name = '',
              email = '',
              phone = '',
              age = 0,
              company = '',
              active = false,
              address = '',
              hash = '') {

    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.age = age;
    this.company = company;
    this.active = active;
    this.address = address;
    this.hash = hash;
  }
}
