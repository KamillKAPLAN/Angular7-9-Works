import {PipeTransform, Pipe} from '@angular/core';
import {UserModel} from '../models/user.model';

@Pipe({
  name: 'userFilter'
})

export class UserFilterPipe implements PipeTransform {
  transform(users: UserModel[], searchUser: string): UserModel[] {
    if (!users || !searchUser) {
      return users;
    }
    return users.filter(user =>
      user.first_name.toLowerCase().indexOf(searchUser.toLowerCase()) !== -1);
  }
}
