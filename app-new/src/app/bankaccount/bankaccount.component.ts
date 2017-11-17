import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BankAccountService } from './../bank-account.service';
import { Account } from './../account';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[BankAccountService]
})
export class BankaccountComponent implements OnInit {

  constructor(private bankService:BankAccountService) { }

  accountList: Account[] = [];
  totalBalance:number;

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

  //Retriving bank deatils from service
  this.accountList=this.bankService.getAccountDeatils();

  this.totalBalance=this.accountList.map(x=>x.balance).reduce((sum, current) => sum + current);

  }

}
