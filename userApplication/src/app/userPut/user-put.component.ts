import {Component} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-userPut',
  templateUrl: './user-put.component.html',
  styleUrls: ['./user-put.component.css']
})
export class UserPutComponent {
  users: UserModel[];
}
