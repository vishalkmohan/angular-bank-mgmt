import { Component, OnInit, ViewEncapsulation,OnDestroy } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { FundTransferServiceService } from './fund-transfer-service.service';
import { Payment } from './../domain/payment';
import { CommonService } from './../common.service';
import { State } from './../domain/state'

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FundtransferComponent implements OnInit, OnDestroy {

  constructor(private router:Router,public paymentService:FundTransferServiceService,private commonService:CommonService) { }

  public transferForm:FormGroup;

  stateList:State[];

  payment:Payment=this.paymentService.payment ;
  id:string;


  ngOnInit() {
  	this.transferForm=new FormGroup({
		 	accno: new FormControl(this.payment.accno,[Validators.required]),
		 	reaccno: new FormControl(this.payment.accno,[Validators.required]),
      amount: new FormControl(this.payment.amount,[Validators.required]),
		 	acctype: new FormControl(this.payment.acctype,[Validators.required]),
      state: new FormControl(this.payment.state,[Validators.required]),
		 	ifsc: new FormControl(this.payment.ifsc,[Validators.required]),
		 	name: new FormControl(this.payment.name,[Validators.required]),
		 	email: new FormControl(this.payment.email,[Validators.required])
		 });


   this.commonService.getStateList().subscribe( 
         data => this.stateList=data ,
         error => console.log("Error :- "+error )
        );


  }

  transfer=function(transferDeatils){
  	console.log(this.transferForm.value);
    this.paymentService.payment = this.transferForm.value; //setting values to service to trrive in another component 
  	this.router.navigateByUrl('/transferview');
  }

  ngOnDestroy() {
    console.log( this.paymentService.payment);
  }

}

