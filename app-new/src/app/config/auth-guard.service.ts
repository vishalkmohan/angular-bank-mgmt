import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService,private router: Router ) { }

  public canActivate(): boolean {

  	//if authendicated activate router
	if(!this.authService.isAuthenticated()){
		this.router.navigate(['login']); //redirect to login page
        return false;
	}

	return true;
  }

}
