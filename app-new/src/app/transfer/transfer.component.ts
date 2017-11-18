import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { FundTransferServiceService } from './../fundtransfer/fund-transfer-service.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransferComponent {

  accno:string;
  sub:any;
  transactionId:string="TRN1111";  

  constructor(public paymentService:FundTransferServiceService,private urlRouter:Router) { }  

  submitPayment=function(){    
    this.urlRouter.navigate(['/success', this.transactionId]);
  }

}
