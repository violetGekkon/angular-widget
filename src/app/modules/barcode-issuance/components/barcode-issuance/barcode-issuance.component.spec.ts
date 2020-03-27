import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeIssuanceComponent } from './barcode-issuance.component';

describe('SettingsPageComponent', () => {
  let component: BarcodeIssuanceComponent;
  let fixture: ComponentFixture<BarcodeIssuanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeIssuanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
