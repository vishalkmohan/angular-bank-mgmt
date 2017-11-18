import { Injectable } from '@angular/core';
import { Payment } from './../domain/payment'

@Injectable()
export class FundTransferServiceService {

  public payment:Payment= new Payment();

}
