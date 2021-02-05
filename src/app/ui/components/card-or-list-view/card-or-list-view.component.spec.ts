import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardOrListViewComponent } from './card-or-list-view.component';

describe('CardOrListViewComponentComponent', () => {
  let component: CardOrListViewComponent;
  let fixture: ComponentFixture<CardOrListViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOrListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
