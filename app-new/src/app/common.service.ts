import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  getStateList=function():Array<string>{

  	return ["1","2"];
  }


}
