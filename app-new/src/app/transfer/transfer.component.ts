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
  transactionId:string=null;  
  errorPaymentMsg:string=null;

  constructor(public paymentService:FundTransferServiceService,private urlRouter:Router) { }  

  submitPayment=function(){  

    console.log(this.paymentService.payment);

    this.transactionId=this.paymentService.transferPayment();
    if(this.transactionId!=null){
      //payment success
       this.urlRouter.navigate(['/success', this.transactionId]);
    }else{
      //Payment failed
      this.errorPaymentMsg="Sorry, We are unable to process your payment. Please contact administrator";
    }

    
  }

}
