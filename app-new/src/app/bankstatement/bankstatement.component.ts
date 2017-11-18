import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StatementService } from './statement.service';
import { MiniStatement } from './../domain/mini-statement';

@Component({
  selector: 'app-bankstatement',
  templateUrl: './bankstatement.component.html',
  styleUrls: ['./bankstatement.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[StatementService]
})
export class BankstatementComponent implements OnInit {

   constructor(private route: ActivatedRoute,private statementService:StatementService) { }

   accNo:string;
   sub:any;

   statementList: MiniStatement[] = [];
   totalCr:number=0;
   totalDr:number=0;
   total:number=0;


  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.accNo = params['accNo']; 
    });
    console.log(this.accNo);

    //Retriving mini statements from service
    this.statementList=this.statementService.getMiniStatements(this.accNo);

    this.total= (this.statementList==null || this.statementList.length==0 ) ? 0:this.statementList.map(x=>x.amount).reduce((sum, current) => sum + current);
    this.totalCr= (this.statementList==null || this.statementList.length==0 ) ? 0:this.statementList.filter(x=>x.transactionType=="Cr").map(x=>x.amount).reduce((sum, current) => sum + current);
    this.totalDr= (this.statementList==null || this.statementList.length==0 ) ? 0:this.statementList.filter(x=>x.transactionType=="Dr").map(x=>x.amount).reduce((sum, current) => sum + current);

  }

}
