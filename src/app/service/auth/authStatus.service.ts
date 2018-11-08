import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthStatusService {

  private loggenIn = new BehaviorSubject<boolean> (false);
  authStatus = this.loggenIn.asObservable();

  constructor() { }

  changeAuthStatus(value: boolean) {
    this.loggenIn.next(value);
  }
}
