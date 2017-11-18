import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

import { BankAccountService } from './bank-account.service';
import { Account } from './../domain/account';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[BankAccountService]
})
export class BankaccountComponent implements OnInit {

  constructor(private bankService:BankAccountService, private urlRouter:Router) { }

  accountList: Account[] = [];
  totalBalance:number=0;

    public stmtForm:FormGroup;

  ngOnInit() {

        //Retriving bank deatils from service
        this.accountList=this.bankService.getAccountDeatils();

        this.totalBalance= (this.accountList==null || this.accountList.length==0 ) ? 0:this.accountList.map(x=>x.balance).reduce((sum, current) => sum + current);

        this.stmtForm = new FormGroup({
             option: new FormControl()
           });

  }



  miniStmt =  function(stmtDeatils){
    console.log(stmtDeatils);
    this.urlRouter.navigate(['/bankstatement', stmtDeatils.option]);
  }

}
