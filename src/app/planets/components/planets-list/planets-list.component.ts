import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '@swp/planets/services/planets.service';
import { IPlanet, Planet } from '@swp/planets/data-models/Planet';
import { SpinnerConfigInterface } from '@swp/layout';

@Component({
  selector: 'swp-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planetsList: Planet[] = [];
  spinnerConfig: SpinnerConfigInterface = {
    diameter: 50,
    containerHeight: 110
  };
  loadInProgress: boolean;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.loadInProgress = true;
    this.planetsService.getList()
      .subscribe(
        (response: IPlanet[]) => this.setPlanets(response),
        () => this.onPlanetsListFetchError()
      );
  }

  setPlanets(response: IPlanet[]) {
    this.loadInProgress = false;
    _.each(response, (elem) => this.planetsList.push(new Planet(elem)));
  }

  onPlanetsListFetchError() {
    this.loadInProgress = false;
    alert('Ooops, sorry! Hyperdrive is failing!');
  }

}
