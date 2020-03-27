import { TestBed } from '@angular/core/testing';

import { BarcodeIssuanceFormValidatorService } from './barcode-issuance-form-validator.service';

describe('BarcodeIssuanceFormValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarcodeIssuanceFormValidatorService = TestBed.get(BarcodeIssuanceFormValidatorService);
    expect(service).toBeTruthy();
  });
});
