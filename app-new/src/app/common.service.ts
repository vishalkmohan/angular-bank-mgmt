import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { State } from './domain/state'

@Injectable()
export class CommonService {

  constructor(private http:HttpClient) { }
  stateUrl:string="https://restcountries.eu/rest/v2/all1";

  getStateList(){
	return	this.http.get<State[]>(this.stateUrl);
  }


}
