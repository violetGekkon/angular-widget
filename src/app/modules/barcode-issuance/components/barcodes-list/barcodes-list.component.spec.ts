import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BarcodesListComponent } from './barcodes-list.component';

describe('BarcodesListComponent', () => {
  let component: BarcodesListComponent;
  let fixture: ComponentFixture<BarcodesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
