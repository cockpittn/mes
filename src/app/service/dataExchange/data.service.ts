import {EventEmitter, Injectable} from '@angular/core';


@Injectable()
export class DataService {

  text = '';
  pushedData = new EventEmitter<string>();

  constructor() { }

  pushData(value: string) {
    this.text = value;
    this.pushedData.emit(value);
  }
}
