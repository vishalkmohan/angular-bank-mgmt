export class MiniStatement {

	statementId:string;
	transactionDt:string;
	transactionType:string;
	amount:number;

	constructor(statementId:string,transactionDt:string,transactionType:string,amount:number){
		this.statementId = statementId;
		this.transactionDt = transactionDt;
		this.transactionType = transactionType;
		this.amount = amount;
	}
}
