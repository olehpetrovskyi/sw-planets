import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetComponent, PlanetsListComponent } from './components';
import { AuthGuard } from '@swp/auth/guards/auth.guard';

const authRoutes: Routes = [
  { path: '', component: PlanetsListComponent, canActivate: [AuthGuard] },
  { path: 'planet/:id', component: PlanetComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlanetsRoutingModule {}
