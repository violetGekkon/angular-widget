import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeclarerDetailsComponent } from './declarer-details.component';

describe('DeclarerDetailsComponent', () => {
  let component: DeclarerDetailsComponent;
  let fixture: ComponentFixture<DeclarerDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeclarerDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
