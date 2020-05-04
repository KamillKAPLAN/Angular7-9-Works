import {Component, OnDestroy} from '@angular/core';
import {UserService} from '../providers/user/user.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  loginSubscription: Subscription;
  isAuthenticated = false;

  constructor(private userService: UserService,
              public router: Router) {

    this.loginSubscription = userService.login_Change.subscribe(
      (data: boolean) => {
        this.isAuthenticated = data;
      }
    );

    this.userService.refreshData();
  }

  userLogout() {
    const token = localStorage.clear();
    this.router.navigate(['/userLogin']);
    this.isAuthenticated = true;
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

}
