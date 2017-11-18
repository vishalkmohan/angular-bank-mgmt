import { Injectable } from '@angular/core';

import { MiniStatement } from './../domain/mini-statement';

@Injectable()
export class StatementService {

  constructor() { }

  getMiniStatements=function(accountNo):Array<MiniStatement>{

  	var statementList: MiniStatement[] = [];
  	var stmt1:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Cr",100);
  	var stmt2:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Dr",1000);
  	var stmt3:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Cr",15000);
  	var stmt4:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Cr",100);
  	var stmt5:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Dr",100);
  	var stmt6:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Cr",100);
  	var stmt7:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Cr",3000);
  	var stmt8:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Dr",100);
  	var stmt9:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Cr",500);
  	var stmt10:MiniStatement = new MiniStatement('ST00001',"10/11/2017","Cr",100);
  	statementList.push(stmt1);
  	statementList.push(stmt2);
  	statementList.push(stmt3);
  	statementList.push(stmt4);
  	statementList.push(stmt5);
  	statementList.push(stmt6);
  	statementList.push(stmt7);
  	statementList.push(stmt8);
  	statementList.push(stmt9);
  	statementList.push(stmt10);
  	//statementList=null;
  	return statementList;

  }

}
