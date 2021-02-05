import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpiritCalculationPartComponent } from './spirit-calculation-part.component';

describe('SpiritCalculationPartComponent', () => {
  let component: SpiritCalculationPartComponent;
  let fixture: ComponentFixture<SpiritCalculationPartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritCalculationPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritCalculationPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
