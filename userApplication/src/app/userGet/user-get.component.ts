import {Component, OnInit} from '@angular/core';
import {UserService} from '../../providers/user/user.service';
import {UserModel} from '../../models/user.model';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-userGet',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent {

  users: UserModel[];
  confirmDelete = false;
  user: UserModel = new UserModel();

  constructor(private userService: UserService,
              public router: Router,
              public location: Location,
              public activatedRoute: ActivatedRoute) {
    this.userService.refreshData();
  }

  pageActual = 1;

  ngOnInit() {
    this.activatedRoute.params.subscribe(response => {
      const id = response['id'];
      this.getUser(id);
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
    /*this.router.navigateByUrl('/userGet', {skipLocationChange: true}).then(() => {
      console.log(decodeURI(decodeURI(this.location.path())));
      this.router.navigate([decodeURI(this.location.path())]);
    });*/
  }

  getUser(id: any) {
    if (id != undefined) {
      this.userService.getUser(+id)
        .subscribe(
          (data: UserModel) => {
            this.user = data;
          }
        );
    } else {
      this.userService.getUser(0)
        .subscribe(
          (datas: UserModel[]) => {
            const token = localStorage.getItem('token_val');
            if (token) {
              this.users = datas;
            }
          }
        );
    }
  }
}
