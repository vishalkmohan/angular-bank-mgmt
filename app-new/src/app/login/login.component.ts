import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  private loginForm:FormGroup;

  private errors:string=null;
  
  ngOnInit() {
  	 this.loginForm=new FormGroup({
		 	userid: new FormControl(),
		 	password: new FormControl()
		 });
  }


  login = function(loginDeatils){
 	 	console.log("User Deatails : "+loginDeatils.userid +":"+loginDeatils.password);
 	 	if(loginDeatils.userid == "superuser" && loginDeatils.password == "superuser1"){
 	 		console.log("Login Success....");
 	 		this.router.navigateByUrl('/accountdetails');
 	 	} else {
 	 		console.log("Login Failed....");
 	 		this.errors="Unable to authendicate. Please try again.";
 	 	}
  }

}
