import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTableCardComponent } from './view-table-card.component';

describe('ViewTableCardComponent', () => {
  let component: ViewTableCardComponent;
  let fixture: ComponentFixture<ViewTableCardComponent>;

  beforeEach(async(() => {
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
