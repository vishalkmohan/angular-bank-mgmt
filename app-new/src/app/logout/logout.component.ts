import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  	//clear session storage and navigate lo login page
  	sessionStorage.clear();
  	this.router.navigate(['login']); //redirect to login page
  }

}
