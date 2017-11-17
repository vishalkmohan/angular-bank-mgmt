
import { RouterModule,Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { BankstatementComponent } from './bankstatement/bankstatement.component';
import { PaymentsComponent } from './payments/payments.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { TransferComponent } from './transfer/transfer.component';
import { PaymemtsuccessComponent } from './paymemtsuccess/paymemtsuccess.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes : Routes = [
	    {path:'home',component:HomeComponent},
	    {path:'login',component:LoginComponent},
	    {path:'accountdetails',component:BankaccountComponent},
	    {path:'bankstatement/:accNo',component:BankstatementComponent},
	    {path:'payments',component:PaymentsComponent},
	    {path:'transfer',component:FundtransferComponent },
	    {path:'success/:transactionId',component:PaymemtsuccessComponent },
	    {path:'transferview',component:TransferComponent },
	    {path:'', redirectTo:'/home', pathMatch: 'full'},
	    {path:'**', component:PagenotfoundComponent }
	  ];


export const RouteConfig:ModuleWithProviders= RouterModule.forRoot(routes);