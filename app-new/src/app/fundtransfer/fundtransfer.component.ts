import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FundtransferComponent implements OnInit {

  constructor(private router:Router) { }

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
  	console.log(transferDeatils.accno);
  	this.router.navigateByUrl('/success');
  }

}
