import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodesListComponent } from './barcodes-list.component';

describe('BarcodesListComponent', () => {
  let component: BarcodesListComponent;
  let fixture: ComponentFixture<BarcodesListComponent>;

  beforeEach(async(() => {
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
