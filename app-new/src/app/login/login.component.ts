import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './../login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService ) { }

  public loginForm:FormGroup;

  public errors:string = null;
  public authToken:string = null;
  
  textValidator(control){
    if(control.value.length<5){
      return {'password':true};   //true means invalid
    }
  }

  ngOnInit() {
  	 this.loginForm = new FormGroup({
		 	userid: new FormControl("",[Validators.required,Validators.maxLength(10)]),
		 	password: new FormControl("",[Validators.required,this.textValidator])
		 });
  }


  login = function(loginDeatils){
  
 	 	console.log("User Deatails : "+loginDeatils.userid +":"+loginDeatils.password);
 	 	
 	 	this.authToken = this.loginService.authendicate(loginDeatils);
 	 	
 	 	if(this.authToken!=null){
 	 		console.log("Login Success....");
       		//local storage-browser scope
	       localStorage.setItem('authtoken ', JSON.stringify({ token: authToken, name: loginDeatils.userid }));
	       //session storage- tab scope
	       sessionStorage.setItem('authtoken', JSON.stringify({ token: authToken, name: loginDeatils.userid }));
	       
	       this.router.navigateByUrl('/accountdetails');
 	 	} else{
 	 		console.log("Login Failed....");
 	 		this.errors="Unable to authendicate. Please try again.";
 	 	}
  } 

}
