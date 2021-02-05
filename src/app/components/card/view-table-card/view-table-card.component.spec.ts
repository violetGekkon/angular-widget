import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewTableCardComponent } from './view-table-card.component';

describe('ViewTableCardComponent', () => {
  let component: ViewTableCardComponent;
  let fixture: ComponentFixture<ViewTableCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
