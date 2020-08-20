import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '@swp/planets/data-models/Planet';

@Component({
  selector: 'swp-planet-thumbnail',
  templateUrl: './planet-thumbnail.component.html',
  styleUrls: ['./planet-thumbnail.component.scss']
})
export class PlanetThumbnailComponent implements OnInit {

  @Input() planet: Planet;
  constructor() { }

  ngOnInit(): void {
  }

}
