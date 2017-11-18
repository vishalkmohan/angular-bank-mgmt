import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { State } from './domain/state'

@Injectable()
export class CommonService {

  constructor(private http:HttpClient) { }
  stateUrl:string="https://restcountries.eu/rest/v2/all";

  getStateList(){
	return	this.http.get<State[]>(this.stateUrl); //emit multiple value if Observabale
  }

  getStateListByPromise(){
	return	this.http.get<State[]>(this.stateUrl).toPromise(); //wait to load full data insted of asyanchronus call, emit 1 value
  }


}
