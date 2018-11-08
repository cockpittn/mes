import { Component, OnInit } from '@angular/core';
import {AuthStatusService} from '../../service/auth/authStatus.service';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .click:hover {
      cursor: pointer;
    }
  `]
})
export class NavbarComponent implements OnInit {
  loggedIn = false;
  userName = 'Me';

  constructor(private authStatusService: AuthStatusService, private authservice: AuthService) { }

  ngOnInit() {
    this.authStatusService.authStatus.subscribe(value => this.loggedIn = value);
  }
  onLogout() {
    this.authservice.logout();
  }


}
