import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() { }

  private loginForm:FormGroup;
  ngOnInit() {
  	 this.loginForm=new FormGroup({
		 	userid: new FormControl(),
		 	password: new FormControl()
		 });
  }


  login = function(loginDeatils){
 	 	console.log("User Deatails : "+loginDeatils.userid +":"+loginDeatils.password);
  }

}
