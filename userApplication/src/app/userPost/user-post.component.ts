import {Component} from '@angular/core';
import {UserService} from '../../providers/user/user.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-userPost',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent {

  user: UserModel = new UserModel();
  password = '';
  rePsw = '';
  age = '';
  active;

  constructor(private userService: UserService) {
  }

  save() {
    if (this.password != this.rePsw || this.password == '') {
      alert('şifreler aynı değil');
      return;
    }
    this.user.age = +this.age;
    this.user.active = false;
    this.user.hash = this.password;
    this.userService.postUser(this.user);
  }
}
