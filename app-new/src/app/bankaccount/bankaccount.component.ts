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
  	let authtoken = JSON.parse(localStorage.getItem('authtoken'));
	let token = authtoken.token; // your token
	let name = authtoken.name;

	console.log("Auth Token:"+token + " - "+name);

  }

}
