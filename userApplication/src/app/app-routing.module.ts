import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPostComponent} from './userPost/user-post.component';
import {UserGetComponent} from './userGet/user-get.component';
import {UserPutComponent} from './userPut/user-put.component';
import {UserLoginComponent} from './userLogin/user-login.component';
import {AuthGuardService} from '../providers/guard/AuthGuard.service';

const appRoutes: Routes = [
  {
    path: 'userPost',
    component: UserPostComponent
  },
  {
    path: '',
    redirectTo: '/userPost',
    pathMatch: 'full'
  },
  {
    path: 'userLogin',
    component: UserLoginComponent
  },
  {
    path: 'userLogout',
    component: UserLoginComponent
  },
  {
    path: 'userGet',
    component: UserGetComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'userGet/:id',
    component: UserGetComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'userPut',
    component: UserPutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: '/userPost'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [UserPostComponent, UserGetComponent, UserPutComponent, UserLoginComponent];
