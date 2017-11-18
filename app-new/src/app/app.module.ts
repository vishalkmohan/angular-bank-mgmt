import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteConfig} from './app.router';
 import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Router }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { BankstatementComponent } from './bankstatement/bankstatement.component';
import { PaymentsComponent } from './payments/payments.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { TransferComponent } from './transfer/transfer.component';
import { PaymemtsuccessComponent } from './paymemtsuccess/paymemtsuccess.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { FundTransferServiceService } from './fundtransfer/fund-transfer-service.service';
import { CommonService } from './common.service';


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
    PaymemtsuccessComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouteConfig,
    ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [ FundTransferServiceService,CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe((val) => {
        // see also 
        console.log(val) 
    });
    }
 }


