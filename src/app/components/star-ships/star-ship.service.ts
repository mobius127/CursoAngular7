import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { StarShip } from './star-ship';

@Injectable({
  providedIn: 'root'
})
export class StarShipService {

  private apiUrl = 'https://angular-formacion.azurewebsites.net/api/StarShips';

  constructor(private http: HttpClient) { }

  getStarShipsFromServer(): Observable<StarShip[]> {
    return this.http.get<StarShip[]>(this.apiUrl).pipe(map(response => response));
  }
}
