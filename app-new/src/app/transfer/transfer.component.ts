import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransferComponent implements OnInit {


  accno:string;
  acctype:string="hiii";
  ifsc:string="hiii";
  name:string="hiii";
  email:string="hiii";

  sub:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.accno = params['accno']; 
    });
  }

}
