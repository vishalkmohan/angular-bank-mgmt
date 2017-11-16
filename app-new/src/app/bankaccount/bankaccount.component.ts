import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BankaccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	//local storage retrival
  	let authtokenLocal = JSON.parse(localStorage.getItem('authtoken'));
	let tokenLocal = authtokenLocal.token; // your token
	let nameLocal = authtokenLocal.name;
	console.log("Local Storage - Auth Token:"+tokenLocal + " - "+nameLocal);

	//session storage retrival
	let authtokenSession = JSON.parse(sessionStorage.getItem('authtoken'));
	let tokenSession = authtokenSession.token; // your token
	let nameSession = authtokenSession.name;
	console.log("Session Storage - Auth Token:"+tokenSession + " - "+nameSession);



  }

}
