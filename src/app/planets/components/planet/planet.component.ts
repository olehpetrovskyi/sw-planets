import { Component, OnInit } from '@angular/core';
import { IPlanet, Planet } from '@swp/planets/data-models/Planet';
import { PlanetsService } from '@swp/planets/services/planets.service';
import { ActivatedRoute } from '@angular/router';
import { SpinnerConfigInterface } from '@swp/layout';

@Component({
  selector: 'swp-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planet: Planet;
  spinnerConfig: SpinnerConfigInterface = {
    diameter: 50,
    containerHeight: 110
  };
  loadInProgress: boolean;

  constructor(private planetsService: PlanetsService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.getPlanet();
    });
  }

  getPlanet() {
    const name = this.route.snapshot.paramMap.get('id');
    this.loadInProgress = true;
    this.planetsService.getPlanetByName(name)
      .subscribe(
        (response: IPlanet) => this.setPlanet(response),
        () => this.onPlanetLoadError()
      );
  }

  setPlanet(planetInfo: IPlanet) {
    this.loadInProgress = false;
    this.planet = new Planet(planetInfo);
  }

  onPlanetLoadError() {
    this.loadInProgress = false;
    alert('Chewieeee, hyperdrive\'s not working again');
  }
}
