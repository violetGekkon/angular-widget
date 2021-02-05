import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BarcodeItemComponent } from './barcode-item.component';

describe('BarcodeItemComponent', () => {
  let component: BarcodeItemComponent;
  let fixture: ComponentFixture<BarcodeItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
