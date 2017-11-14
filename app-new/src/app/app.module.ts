import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router } from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { BankstatementComponent } from './bankstatement/bankstatement.component';
import { PaymentsComponent } from './payments/payments.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { TransferComponent } from './transfer/transfer.component';
import { PaymemtsuccessComponent } from './paymemtsuccess/paymemtsuccess.component';

const appRouter:Router = [
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'accountdetails',component:BankaccountComponent},
    {path:'bankstatement',component:BankstatementComponent},
    {path:'payments',component:PaymentsComponent},
    {path:'transfer',component:FundtransferComponent },
    {path:'**', redirectTo:'/home'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BankaccountComponent,
    BankstatementComponent,
    PaymentsComponent,
    FundtransferComponent,
    TransferComponent,
    PaymemtsuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


