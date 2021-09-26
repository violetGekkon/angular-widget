import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityReferenceBookComponent } from './capacity-reference-book.component';

describe('CapacityReferenceBookComponent', () => {
  let component: CapacityReferenceBookComponent;
  let fixture: ComponentFixture<CapacityReferenceBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityReferenceBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityReferenceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
