import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fo',
  templateUrl: './fo.component.html',
  styles: [
    `.collapse-button {
      background: url("./assets/img/arrow-circle-top-3x.png") no-repeat bottom;
      background-size: 100%;
    }`
  ]
})
export class FoComponent implements OnInit {

  collapsed = false;
  constructor() { }

  ngOnInit() {
  }

  switchImage() {
    if (!this.collapsed) {
     document.getElementById('collapse-btn').style.backgroundImage = 'url("./assets/img/arrow-circle-bottom-3x.png")';
    } else {
      document.getElementById('collapse-btn').style.backgroundImage = 'url("./assets/img/arrow-circle-top-3x.png")';
    }
    this.collapsed = !this.collapsed;
  }

  switchCollapse() {
    document.getElementById('collapse-btn').click();
  }
}
