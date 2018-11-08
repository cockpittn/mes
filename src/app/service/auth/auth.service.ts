import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserModel} from '../../auth/user.model';
import {DataService} from '../dataExchange/data.service';
import {AuthStatusService} from './authStatus.service';

@Injectable()
export class AuthService {

  loggedIn = false;
  private user = null;

  constructor(private router: Router, private dataService: DataService, private authStatusService: AuthStatusService) {}

  signinUser(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.user = new UserModel(username);
      this.loggedIn = true;
      this.authStatusService.changeAuthStatus(true);
      this.dataService.pushData('Salut ' + username);
      this.router.navigate(['/home']);
      return this.user;
    }
    this.loggedIn = false;
    this.user = null;
    return null;
  }

  getUser() {
    return this.user;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  logout() {
    this.user = null;
    this.dataService.pushData('Au revoir ');
    this.loggedIn = false;
    this.authStatusService.changeAuthStatus(false);
    this.router.navigate(['/home']);
  }
}
