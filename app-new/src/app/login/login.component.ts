import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './login-service';
import { LoginResponse } from './../domain/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService ) { }

  public loginForm:FormGroup;

  public errors:string = null;
  public authToken:LoginResponse = null;
  
  textValidator(control){
    if(control.value.length<5){
      return {'password':true};   //true means invalid
    }
  }

  ngOnInit() {

    //just clearing session storage
    sessionStorage.clear();

  	 this.loginForm = new FormGroup({
		 	userid: new FormControl("",[Validators.required,Validators.maxLength(10)]),
		 	password: new FormControl("",[Validators.required,this.textValidator])
		 });
  }


  login = function(loginDeatils){
  
 	 	console.log("User Deatails : "+loginDeatils.userid +":"+loginDeatils.password);
 	 	
 	 	this.loginService.authendicate(loginDeatils).subscribe( 
          data   => this.loginSuccess(data),
          error  => this.loginFailed(error),
          ()     => console.log("Request Completed ...")
         );
 	 	
  } 

  loginSuccess(tokenResponse){

    if(tokenResponse!=null){
        console.log("Login Success....");
         //local storage-browser scope
         //localStorage.setItem('authtoken ', JSON.stringify({ token: this.authToken, name: loginDeatils.userid }));
         //session storage- tab scope
         sessionStorage.setItem('authtoken', JSON.stringify({ token: tokenResponse.token, name: tokenResponse.user.username }));
         
         this.router.navigateByUrl('/accountdetails');
      }
  }

  loginFailed(error){
    console.log("Login Failed....");
    this.errors="Unable to authendicate. Please try again.";
  }

}
