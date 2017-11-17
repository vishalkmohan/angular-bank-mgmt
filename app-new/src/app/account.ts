export class Account {

	accountNo:string;
	balance:number;
	accountType:string;

	constructor(accountNo:string, accountType:string, balance:number){
		this.accountNo = accountNo;
		this.accountType = accountType;
		this.balance = balance;
	} 

}
