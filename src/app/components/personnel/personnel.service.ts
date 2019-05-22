import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private apiUrl = 'https://angular-formacion.azurewebsites.net/api/personnels';

  constructor(private http: HttpClient) { }

  getPersonasFromServer(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl).pipe(map(response => response));
  }

  newPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona).pipe(map(response => response));
  }
}
