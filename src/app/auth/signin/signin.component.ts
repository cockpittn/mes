import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {DataService} from '../../service/dataExchange/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public form = {
    username: null,
    password: null
  };
  public error = null;
  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit() {

  }

  onSubmit() {
    const user = this.authService.signinUser(this.form.username, this.form.password);
    if (user === null) {
      this.error = 'accès refusè';
    }
  }
}
