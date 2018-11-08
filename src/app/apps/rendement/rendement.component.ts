import { Component, OnInit } from '@angular/core';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rendement',
  templateUrl: './rendement.component.html',
  styles: [`
    .cal-button {
      background: url("./assets/img/calendar.png") no-repeat bottom;
      background-size: 100%;
    }
  `],
  providers: [NgbTimepickerConfig]
})
export class RendementComponent implements OnInit {
  model;
  time = {
    hour: new Date().getHours(),
    minute: new Date().getMinutes()
  };
  poste = '-';
  error = null;
  public form = {
    production_toile: null,
    rendement: null,
    heure_production: null,
    heures_service: null,
    chaine_cassee: null,
    trame_cassee: null,
    fin_trame: null,
    compteur: null
  };
  constructor(config: NgbTimepickerConfig) {
    config.size = 'small';
  }

  ngOnInit() {

  }


  selectPoste(value: string) {
    this.poste = value;
  }
  onSubmitParameter() {

  }
}
