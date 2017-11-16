import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paymemtsuccess',
  templateUrl: './paymemtsuccess.component.html',
  styleUrls: ['./paymemtsuccess.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaymemtsuccessComponent implements OnInit {

  transactionId:string;
  sub:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.transactionId = params['transactionId']; 
    });
  }

}
