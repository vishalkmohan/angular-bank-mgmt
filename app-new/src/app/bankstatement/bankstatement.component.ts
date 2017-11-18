import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bankstatement',
  templateUrl: './bankstatement.component.html',
  styleUrls: ['./bankstatement.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BankstatementComponent implements OnInit {

   constructor(private route: ActivatedRoute) { }

   accNo:string;
   sub:any;

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.accNo = params['accNo']; 
    });
    console.log(this.accNo);
  }

}
