import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IPlanet } from '@swp/planets/data-models/Planet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getList(): Observable<IPlanet[]> {
    return this.http.get<IPlanet[]>(environment.planetsApiUrl + '/planets');
  }

  getPlanetByName(name: string): Observable<IPlanet> {
    return this.http.get<IPlanet>(environment.planetsApiUrl + '/planets/' + name);
  }
}
