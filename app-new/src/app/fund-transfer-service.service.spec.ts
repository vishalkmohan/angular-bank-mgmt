import { TestBed, inject } from '@angular/core/testing';

import { FundTransferServiceService } from './fund-transfer-service.service';

describe('FundTransferServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundTransferServiceService]
    });
  });

  it('should be created', inject([FundTransferServiceService], (service: FundTransferServiceService) => {
    expect(service).toBeTruthy();
  }));
});
