import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Headers } from '@angular/http';
import { LoginResponse } from './../domain/login-response';

@Injectable()
export class LoginService {

  loginUrl:string = "https://salty-peak-20604.herokuapp.com/users/login";

  constructor(private http:HttpClient) { }
  
  authendicate = function(loginDeatils) {
  	const body = {"username": loginDeatils.userid,"password": loginDeatils.password};
  	let headers = new Headers();
  	return	this.http.post(this.loginUrl,body,{headers: headers});
  }

}

