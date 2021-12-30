import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, empty } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { Country } from '../models/country.model';
import { State } from '../models/state.model';

import  countryData from 'src/assets/data.json';  

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private _jsonURL = 'assets/data.json';

  states: State[];
  countries: Country[];  

  public getCountries(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  
  

  // public getStates(countryId: number): Observable<State[]> {
  //   return this.http.get<State[]>(this._jsonURL).pipe (
  //     map(states => {
  //       this.states = states.filter(s => s.countryId === countryId);
  //       return states;
  //     })
  //   );
  // }

  // public getStates(countryId: number): Observable<any> {
  //   return this.http.get<any>(this._jsonURL).pipe (
  //     map(states => {
  //       this.states = states.filter(s => s.countries.countryId === countryId);
  //       return states;
  //     })
  //   );
  // }

  public getStates(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
