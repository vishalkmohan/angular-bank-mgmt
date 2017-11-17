import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable()
export class BankAccountService {

  constructor() { }  

  getAccountDeatils():Array<Account>{
  	var accountList: Account[] = [];
  	var account1:Account = new Account('000102927822',"Savings",11000);
  	var account2:Account = new Account('000102927344',"Current",6000);
  	//this.accountList = [new Account('000102927822',"Savings",453100)];
  	// accountList.push(account1);
  	// accountList.push(account2);
  	
  	return accountList;
  }

}
