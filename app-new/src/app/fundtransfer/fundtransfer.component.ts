import { Component, OnInit, ViewEncapsulation,OnDestroy } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { FundTransferServiceService } from './../fund-transfer-service.service';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FundtransferComponent implements OnInit, OnDestroy {

  constructor(private router:Router,public paymentService:FundTransferServiceService) { }

  private transferForm:FormGroup;


  ngOnInit() {
  	this.transferForm=new FormGroup({
		 	accno: new FormControl("",[Validators.required]),
		 	reaccno: new FormControl("",[Validators.required]),
		 	acctype: new FormControl("",[Validators.required]),
		 	ifsc: new FormControl("",[Validators.required]),
		 	name: new FormControl("",[Validators.required]),
		 	email: new FormControl("",[Validators.required])
		 });
  }

  transfer=function(transferDeatils){
  	console.log(this.transferForm.value);
    this.paymentService.payment = this.transferForm.value; //setting values to service to trrive in another component 
  	this.router.navigate(['/transferview', transferDeatils.accno]);
  }

  ngOnDestroy() {
    console.log( this.paymentService.payment);
  }

}

