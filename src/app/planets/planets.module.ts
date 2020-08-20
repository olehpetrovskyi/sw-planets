import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@swp/layout/layout.module';
import { PlanetsRoutingModule } from '@swp/planets/planets-routing.module';
import { PlanetComponent, PlanetThumbnailComponent } from '@swp/planets/components';
import { PlanetsListComponent } from '@swp/planets/components/planets-list/planets-list.component';


export const COMPONENTS = [
  PlanetComponent,
  PlanetThumbnailComponent,
  PlanetsListComponent
];

@NgModule({
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    LayoutModule
  ],
  declarations: COMPONENTS,
  exports: []
})
export class PlanetsModule {}
