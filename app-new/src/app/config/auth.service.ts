import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }



  public isAuthenticated(): boolean {
  	//cherck for session/local storage token generated or not after login

 	//  	//local storage retrival
 	// let authtokenLocal = JSON.parse(localStorage.getItem('authtoken'));
	// let tokenLocal = authtokenLocal.token; // your token
	// let nameLocal = authtokenLocal.name;
	// console.log("Local Storage - Auth Token:"+tokenLocal + " - "+nameLocal);

	//session storage retrival for token
	let authtokenSession = JSON.parse(sessionStorage.getItem('authtoken'));
	if(authtokenSession==null){
		return false;
	}

	// let tokenSession = authtokenSession.token; // your token
	// let nameSession = authtokenSession.name;
	// console.log("Session Storage - Auth Token:"+tokenSession + " - "+nameSession);

  	return true;
  }  

}
