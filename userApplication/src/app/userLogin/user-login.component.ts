import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {UserService} from '../../providers/user/user.service';

@Component({
  selector: 'app-userLogin',
  templateUrl: './user-login.component.html',
  styleUrls: ['../userPost/user-post.component.css']
})
export class UserLoginComponent {
  user: UserModel = new UserModel();

  constructor(private userService: UserService) {
  }

  login() {
    this.userService.userLogin(this.user);
  }
}
