import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/user.model';
import {AppConfig} from '../app-config';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  countUser: number = UserModel.length;
  login_Change = new Subject<boolean>();

  constructor(private http: HttpClient, public router: Router) {
  }

  refreshData() {
    const token_val = localStorage.getItem('token_val');
    if (token_val != '' && token_val != undefined) {
      this.login_Change.next(false);
    } else {
      this.login_Change.next(true);
    }
  }


  postUser(dbUser: UserModel) {
    this.http.post<UserModel>(AppConfig.URL + '/user', dbUser)
      .subscribe(
        value => {
          alert(value);
          this.router.navigate(['/userLogin']);
        },
        err => console.log(err)
      );
  }

  getUser(id: number) {
    if (id != 0) {
      return this.http.get(AppConfig.apiURL + '/user/' + id);
    } else {
      return this.http.get(AppConfig.apiURL + '/users');
    }

  }

  /*getUserById(id: number) {
    return this.http.get(AppConfig.apiURL + '/user/' + id);
  }*/

  userLogin(dbUser: UserModel) {
    this.http.post<UserModel>(AppConfig.URL + '/login', dbUser)
      .subscribe(
        (data: any) => {
          this.login_Change.next(true);
          localStorage.setItem('token_val', data.token_val);
          this.router.navigate(['/userGet']);
        },
        // api'den gelen cevap yazılacak
        err => alert('Kullanıcı Bulunamadı')
      );
  }

  deleteUser(id: number) {
    return this.http.delete(AppConfig.apiURL + '/user/' + id)
      .subscribe(
        data => {
          alert(data);
        },
        err => alert(err)
      );
  }

  userLogout(dbUser: UserModel) {
    this.http.post<UserModel>(AppConfig.URL + '/logout', dbUser)
      .subscribe(
        (data: any) => {
          this.login_Change.next(false);
          localStorage.clear();
          this.router.navigate(['/userGet']);
        }
      );
  }
}
