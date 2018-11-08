import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/dataExchange/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  text = 'please login';
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.text = this.dataService.text;
    this.dataService.pushedData.subscribe(
      (data: string) => {
        this.text = data;
      }
    );
  }

}
