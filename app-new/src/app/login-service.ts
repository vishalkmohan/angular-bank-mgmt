import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  
  authendicate=function(loginDeatils):string {
  
	if(loginDeatils.userid == "superuser" && loginDeatils.password == "superuser1"){
		return "TYDEWAQAG:nbn:67";
 	 } else {
 		return null;
 	 }
 	 
 	return authToken;
 	 	 
  }

}
