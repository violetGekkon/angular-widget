import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAnimationsComponent } from './query-animations.component';

describe('QueryAnimationsComponent', () => {
  let component: QueryAnimationsComponent;
  let fixture: ComponentFixture<QueryAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
